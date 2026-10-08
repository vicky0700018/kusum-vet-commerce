import { createFileRoute } from "@tanstack/react-router";
import { CarePage } from "@/components/store/content";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/animal-care")({
  head: () => ({ meta: [
    { title: "Veterinary & Livestock Care | KUSUM VET CARE" },
    { name: "description", content: "Practical care guidance for cattle, dairy animals, goats, sheep and poultry." },
    { property: "og:title", content: "Veterinary & Livestock Care | KUSUM VET CARE" },
    { property: "og:description", content: "Practical care guidance for cattle, dairy animals, goats, sheep and poultry." },
  ] }),
  component: () => <WebsiteShell><CarePage /></WebsiteShell>,
});
