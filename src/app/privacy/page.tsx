import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Village360 handles information you share through this website and related inquiries.",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      eyebrow="Privacy"
      title="Privacy policy"
      summary="Legal copy will be added before public launch."
    />
  );
}
