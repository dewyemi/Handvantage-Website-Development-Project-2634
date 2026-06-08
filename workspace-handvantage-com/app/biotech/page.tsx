import type { Metadata } from "next";
import { VerticalLanding } from "@/components/VerticalLanding";
import { VERTICALS } from "@/lib/verticals";
import { SITE } from "@/lib/data-tokens";

const v = VERTICALS.biotech;

export const metadata: Metadata = {
  title: { absolute: v.title },
  description: v.description,
  alternates: { canonical: `${SITE.baseUrl}/${v.slug}` },
  openGraph: { title: v.title, description: v.description },
};

export default function BiotechPage() {
  return <VerticalLanding vertical={v} />;
}
