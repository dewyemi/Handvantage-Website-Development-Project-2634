import Link from "next/link";

interface Props {
  category: string;
  headline: string;
  dek?: string;
  date: string;
  readingTime: string;
  href: string;
  size?: "compact" | "default";
}

export function ArticleCard({
  category,
  headline,
  dek,
  date,
  readingTime,
  href,
  size = "default",
}: Props) {
  const headlineClass = size === "compact" ? "text-[22px]" : "text-[28px]";
  return (
    <Link href={href} className="group block py-12 border-t border-ink-hairline">
      <div className="flex justify-between items-start mb-6 gap-4 flex-wrap">
        <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.08em]">
          {category}
        </p>
        <p className="font-ui text-byline text-ink-soft whitespace-nowrap">
          {date} · {readingTime}
        </p>
      </div>
      <h3
        className={`font-display font-semibold ${headlineClass} text-ink group-hover:text-oxblood leading-tight mb-4`}
      >
        {headline}
      </h3>
      {dek && (
        <p className="font-display text-body text-ink line-clamp-2 leading-relaxed">{dek}</p>
      )}
    </Link>
  );
}
