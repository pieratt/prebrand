import type { Metadata } from "next";
import { Terms } from "@/components/Terms";

export const metadata: Metadata = { title: "Sale Terms" };

export default function TermsPage() {
  return <Terms />;
}
