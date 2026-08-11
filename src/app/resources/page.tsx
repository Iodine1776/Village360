import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <PlaceholderPage
      eyebrow="Tools to begin"
      title="Practical resources for village-builders."
      summary="The Mini Village Kit and other starter materials will live here. Download wiring comes next."
    />
  );
}
