import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <PlaceholderPage
      eyebrow="Programs of the movement"
      title="Different needs. One connected movement."
      summary="Programs are not the movement—they are how people begin practicing it. Full program pages will land here once content is confirmed."
    />
  );
}
