import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "@/components/store/admin";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [
    { title: "Admin Dashboard | KUSUM VET CARE" },
    { name: "description", content: "KUSUM VET CARE demo admin panel: dashboard." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Admin Dashboard | KUSUM VET CARE" },
    { property: "og:description", content: "KUSUM VET CARE demo admin panel: dashboard." },
  ] }),
  component: AdminDashboard,
});
