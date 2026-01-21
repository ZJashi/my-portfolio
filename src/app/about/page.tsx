import { AboutSection } from "@/components/about/AboutSection";

export const metadata = {
  title: "About | Zura Jashi",
  description:
    "Research, engineering, and teaching experience across academia and industry.",
};

export default function AboutPage() {
  return (
    <main className="space-y-24">
      <AboutSection />
    </main>
  );
}
