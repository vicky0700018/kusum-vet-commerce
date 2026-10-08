import { createFileRoute } from "@tanstack/react-router";
import { AdminOrders } from "@/components/store/admin";

export const Route = createFileRoute("/admin/orders")({
  head: () => ({ meta: [
    { title: "Admin Orders | KUSUM VET CARE" },
    { name: "description", content: "KUSUM VET CARE demo admin panel: orders." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Admin Orders | KUSUM VET CARE" },
    { property: "og:description", content: "KUSUM VET CARE demo admin panel: orders." },
  ] }),
  component: AdminOrders,
});
