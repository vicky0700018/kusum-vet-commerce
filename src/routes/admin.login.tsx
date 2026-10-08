import { createFileRoute } from "@tanstack/react-router";
import { AdminLogin } from "@/components/store/admin";

export const Route = createFileRoute("/admin/login")({
  head: () => ({ meta: [
    { title: "Admin Login | KUSUM VET CARE" },
    { name: "description", content: "KUSUM VET CARE demo admin panel: login." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Admin Login | KUSUM VET CARE" },
    { property: "og:description", content: "KUSUM VET CARE demo admin panel: login." },
  ] }),
  component: AdminLogin,
});
