import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      eyebrow="Privacy"
      title="Privacy policy"
      summary="Legal copy will be added before public launch."
    />
  );
}
