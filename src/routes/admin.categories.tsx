import { createFileRoute } from "@tanstack/react-router";
import { AdminCategories } from "@/components/store/admin";

export const Route = createFileRoute("/admin/categories")({
  head: () => ({ meta: [
    { title: "Admin Categories | KUSUM VET CARE" },
    { name: "description", content: "KUSUM VET CARE demo admin panel: categories." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Admin Categories | KUSUM VET CARE" },
    { property: "og:description", content: "KUSUM VET CARE demo admin panel: categories." },
  ] }),
  component: AdminCategories,
});
