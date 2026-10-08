import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/store/content";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us | KUSUM VET CARE" },
    { name: "description", content: "About KUSUM VET CARE, animal health and livestock care in Sangli-Madhavnagar, Maharashtra." },
    { property: "og:title", content: "About Us | KUSUM VET CARE" },
    { property: "og:description", content: "About KUSUM VET CARE, animal health and livestock care in Sangli-Madhavnagar, Maharashtra." },
  ] }),
  component: () => <WebsiteShell><AboutPage /></WebsiteShell>,
});
