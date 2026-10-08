import { createFileRoute } from "@tanstack/react-router";
import { AdminContent } from "@/components/store/admin";

export const Route = createFileRoute("/admin/content")({
  head: () => ({ meta: [
    { title: "Admin Content | KUSUM VET CARE" },
    { name: "description", content: "KUSUM VET CARE demo admin panel: content." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Admin Content | KUSUM VET CARE" },
    { property: "og:description", content: "KUSUM VET CARE demo admin panel: content." },
  ] }),
  component: AdminContent,
});
