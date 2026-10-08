import { createFileRoute } from "@tanstack/react-router";
import { CategoriesPage } from "@/components/store/catalog";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/categories")({
  head: () => ({ meta: [
    { title: "Shop by Category | KUSUM VET CARE" },
    { name: "description", content: "Browse animal medicines, cattle nutrition, mineral mixtures, poultry care and more." },
    { property: "og:title", content: "Shop by Category | KUSUM VET CARE" },
    { property: "og:description", content: "Browse animal medicines, cattle nutrition, mineral mixtures, poultry care and more." },
  ] }),
  component: () => <WebsiteShell><CategoriesPage /></WebsiteShell>,
});
