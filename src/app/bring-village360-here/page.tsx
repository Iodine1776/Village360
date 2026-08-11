import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Bring Village360 Here" };

export default function BringHerePage() {
  return (
    <PlaceholderPage
      eyebrow="Launch the movement locally"
      title="You do not need a finished village. You need a responsible place to begin."
      summary="This will become the readiness and implementation inquiry page for churches, schools, courts, nonprofits, and coalitions."
    />
  );
}
