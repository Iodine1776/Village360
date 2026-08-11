import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "The Model" };

export default function TheModelPage() {
  return (
    <PlaceholderPage
      eyebrow="The model behind the movement"
      title="A movement needs more than momentum."
      summary="The Village360 Model turns shared concern into coordinated local action—aligning people, programs, relationships, and infrastructure around families."
    />
  );
}
