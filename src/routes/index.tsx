import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/store/catalog";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Animal Health & Livestock Care | KUSUM VET CARE" },
    { name: "description", content: "Quality animal health, nutrition and livestock care products for farmers in Sangli-Madhavnagar." },
    { property: "og:title", content: "Animal Health & Livestock Care | KUSUM VET CARE" },
    { property: "og:description", content: "Quality animal health, nutrition and livestock care products for farmers in Sangli-Madhavnagar." },
  ] }),
  component: () => <WebsiteShell><HomePage /></WebsiteShell>,
});
