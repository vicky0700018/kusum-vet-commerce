import { createFileRoute } from "@tanstack/react-router";
import { AdminProducts } from "@/components/store/admin";

export const Route = createFileRoute("/admin/products")({
  head: () => ({ meta: [
    { title: "Admin Products | KUSUM VET CARE" },
    { name: "description", content: "KUSUM VET CARE demo admin panel: products." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Admin Products | KUSUM VET CARE" },
    { property: "og:description", content: "KUSUM VET CARE demo admin panel: products." },
  ] }),
  component: AdminProducts,
});
