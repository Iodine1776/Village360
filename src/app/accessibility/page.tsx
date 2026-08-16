import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Village360’s commitment to accessible design and how to request accommodations.",
};

export default function AccessibilityPage() {
  return (
    <PlaceholderPage
      eyebrow="Accessibility"
      title="Accessibility"
      summary="We aim for a calm, readable experience. Formal accessibility statement coming before launch."
    />
  );
}
