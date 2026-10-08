import { createFileRoute } from "@tanstack/react-router";
import { CheckoutPage } from "@/components/store/commerce";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [
    { title: "Checkout | KUSUM VET CARE" },
    { name: "description", content: "Complete your demo order securely." },
    { property: "og:title", content: "Checkout | KUSUM VET CARE" },
    { property: "og:description", content: "Complete your demo order securely." },
  ] }),
  component: () => <WebsiteShell><CheckoutPage /></WebsiteShell>,
});
