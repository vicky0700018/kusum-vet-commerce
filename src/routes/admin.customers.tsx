import { createFileRoute } from "@tanstack/react-router";
import { AdminCustomers } from "@/components/store/admin";

export const Route = createFileRoute("/admin/customers")({
  head: () => ({ meta: [
    { title: "Admin Customers | KUSUM VET CARE" },
    { name: "description", content: "KUSUM VET CARE demo admin panel: customers." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Admin Customers | KUSUM VET CARE" },
    { property: "og:description", content: "KUSUM VET CARE demo admin panel: customers." },
  ] }),
  component: AdminCustomers,
});
