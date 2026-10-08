import { createFileRoute } from "@tanstack/react-router";
import { AccountPage } from "@/components/store/commerce";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/account")({
  validateSearch: (s: Record<string, unknown>): { tab?: string } => ({ tab: typeof s.tab === "string" ? s.tab : undefined }),
  head: () => ({ meta: [
    { title: "My Account | KUSUM VET CARE" },
    { name: "description", content: "Manage your profile, orders, wishlist and saved addresses." },
    { property: "og:title", content: "My Account | KUSUM VET CARE" },
    { property: "og:description", content: "Manage your profile, orders, wishlist and saved addresses." },
  ] }),
  component: Account,
});
function Account() {
  const { tab } = Route.useSearch();
  return <WebsiteShell><AccountPage key={tab} initialTab={tab ?? "Profile"} /></WebsiteShell>;
}
