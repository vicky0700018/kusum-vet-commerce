import { createFileRoute } from "@tanstack/react-router";
import { ShopPage } from "@/components/store/catalog";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/shop")({
  validateSearch: (s: Record<string, unknown>): { q?: string; category?: string } => ({
    q: typeof s.q === "string" ? s.q : undefined,
    category: typeof s.category === "string" ? s.category : undefined,
  }),
  head: () => ({ meta: [
    { title: "Shop Products | KUSUM VET CARE" },
    { name: "description", content: "Shop cattle nutrition, mineral mixtures, supplements, dairy and poultry care products." },
    { property: "og:title", content: "Shop Products | KUSUM VET CARE" },
    { property: "og:description", content: "Shop cattle nutrition, mineral mixtures, supplements, dairy and poultry care products." },
  ] }),
  component: Shop,
});
function Shop() {
  const { q, category } = Route.useSearch();
  return <WebsiteShell><ShopPage key={`${q}-${category}`} query={q ?? ""} category={category ?? ""} /></WebsiteShell>;
}
