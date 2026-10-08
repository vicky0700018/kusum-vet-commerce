import { createFileRoute } from "@tanstack/react-router";
import { AdminSettings } from "@/components/store/admin";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [
    { title: "Admin Settings | KUSUM VET CARE" },
    { name: "description", content: "KUSUM VET CARE demo admin panel: settings." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Admin Settings | KUSUM VET CARE" },
    { property: "og:description", content: "KUSUM VET CARE demo admin panel: settings." },
  ] }),
  component: AdminSettings,
});
