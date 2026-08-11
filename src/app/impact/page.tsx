import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Impact" };

export default function ImpactPage() {
  return (
    <PlaceholderPage
      eyebrow="Learning with honesty"
      title="Good intentions matter. Measured implementation makes them sustainable."
      summary="This space will hold Village360’s outcomes framework and verified results—never placeholder statistics."
    />
  );
}
