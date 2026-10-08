import { createFileRoute } from "@tanstack/react-router";
import { CartPage } from "@/components/store/commerce";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [
    { title: "Your Cart | KUSUM VET CARE" },
    { name: "description", content: "Review the animal health products in your cart." },
    { property: "og:title", content: "Your Cart | KUSUM VET CARE" },
    { property: "og:description", content: "Review the animal health products in your cart." },
  ] }),
  component: () => <WebsiteShell><CartPage /></WebsiteShell>,
});
