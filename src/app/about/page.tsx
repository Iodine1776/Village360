import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="Our story"
      title="Built to grow beyond one founder."
      summary="Origin, mission, values, and stewardship will be written carefully with your wife’s voice—not generated biography filler."
    />
  );
}
