import type { Metadata } from "next";
import { Join } from "@/components/Join";

export const metadata: Metadata = {
  title: "About",
  description: "Pre-Brand is a faster way to launch a startup brand.",
};

export default function JoinPage() {
  return <Join />;
}
