import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/store/catalog";
import { WebsiteShell } from "@/components/store/shell";

export const Route = createFileRoute("/product/$id")({
  head: () => ({ meta: [
    { title: "Product Details | KUSUM VET CARE" },
    { name: "description", content: "Product details, benefits, usage information and reviews." },
    { property: "og:title", content: "Product Details | KUSUM VET CARE" },
    { property: "og:description", content: "Product details, benefits, usage information and reviews." },
  ] }),
  component: Product,
});
function Product() {
  const { id } = Route.useParams();
  return <WebsiteShell><ProductPage key={id} id={id} /></WebsiteShell>;
}
