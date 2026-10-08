import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/store/content";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact | KUSUM VET CARE" },
    { name: "description", content: "Call or visit KUSUM VET CARE at Mangalwar Peth, Sangli, Madhavnagar. Phone 096235 51923." },
    { property: "og:title", content: "Contact | KUSUM VET CARE" },
    { property: "og:description", content: "Call or visit KUSUM VET CARE at Mangalwar Peth, Sangli, Madhavnagar. Phone 096235 51923." },
  ] }),
  component: () => <WebsiteShell><ContactPage /></WebsiteShell>,
});
