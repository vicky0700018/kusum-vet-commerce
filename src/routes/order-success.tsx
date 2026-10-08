import { createFileRoute } from "@tanstack/react-router";
import { SuccessPage } from "@/components/store/commerce";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/order-success")({
  head: () => ({ meta: [
    { title: "Order Placed | KUSUM VET CARE" },
    { name: "description", content: "Your demo order has been placed successfully." },
    { property: "og:title", content: "Order Placed | KUSUM VET CARE" },
    { property: "og:description", content: "Your demo order has been placed successfully." },
  ] }),
  component: () => <WebsiteShell><SuccessPage /></WebsiteShell>,
});
