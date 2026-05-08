#!/usr/bin/env bash
# Unpublish an Insights article by slug. Removes the article from
# workspace-handvantage-com/lib/insights.ts, verifies the build still
# passes, and pushes to main (auto-deploys via Netlify in ~3 min).
#
# Usage:
#   scripts/unpublish-article.sh <slug>
#
# Example:
#   scripts/unpublish-article.sh iso-42001-audit-checklist-2026
#
# To find the slug, look at the URL — everything after /insights/.
# Or run with no args to list current slugs.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
INSIGHTS_TS="$REPO_ROOT/workspace-handvantage-com/lib/insights.ts"

cd "$REPO_ROOT"

# No argument: list current slugs and exit.
if [[ $# -eq 0 ]]; then
  echo "Currently published articles:"
  echo
  grep -E '^\s+slug: "' "$INSIGHTS_TS" | sed -E 's/.*slug: "([^"]+)".*/  • \1/'
  echo
  echo "Usage: $0 <slug>"
  exit 0
fi

SLUG="$1"

# Confirm the slug exists.
if ! grep -q "slug: \"$SLUG\"" "$INSIGHTS_TS"; then
  echo "Error: no article with slug '$SLUG' found in lib/insights.ts" >&2
  echo
  echo "Available slugs:"
  grep -E '^\s+slug: "' "$INSIGHTS_TS" | sed -E 's/.*slug: "([^"]+)".*/  • \1/' >&2
  exit 1
fi

echo "Unpublishing article: $SLUG"
echo

# Use Node to do the structural removal — safer than sed across multi-line
# objects.
node <<NODE_EOF
const fs = require('fs');
const path = '$INSIGHTS_TS';
const src = fs.readFileSync(path, 'utf8');

// Find the article object that has slug: "$SLUG" and remove it (including
// its trailing comma and any leading whitespace).
const slugRegex = /^\s+\{\s*\n\s+slug:\s*"$SLUG"[\s\S]+?\n\s+\},\s*\n/m;
const updated = src.replace(slugRegex, '');

if (updated === src) {
  console.error('Could not locate the article object to remove. Slug match found but structural removal failed.');
  process.exit(1);
}

fs.writeFileSync(path, updated);
console.log('  Removed article block from lib/insights.ts');
NODE_EOF

# Verify the build passes.
echo
echo "Verifying build..."
cd workspace-handvantage-com
if ! npx next build > /tmp/unpublish-build.log 2>&1; then
  echo "Error: build failed after removing the article." >&2
  echo "Restoring lib/insights.ts and aborting." >&2
  cd "$REPO_ROOT"
  git checkout workspace-handvantage-com/lib/insights.ts
  echo
  echo "Build log:" >&2
  tail -30 /tmp/unpublish-build.log >&2
  exit 1
fi
cd "$REPO_ROOT"
echo "  Build clean."

# Commit and push.
echo
echo "Committing and pushing..."
git add workspace-handvantage-com/lib/insights.ts
git commit -m "Insights: unpublish $SLUG"
git push origin main

echo
echo "Done. Netlify will redeploy in ~3 min, then the article is gone."
echo "URL that's now 404: https://workspace.handvantage.com/insights/$SLUG"
