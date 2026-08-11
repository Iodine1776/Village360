import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return (
    <PlaceholderPage
      eyebrow="Accessibility"
      title="Accessibility"
      summary="We aim for a calm, readable experience. Formal accessibility statement coming before launch."
    />
  );
}
