import { menuData } from "@/lib/constants";
import { productContent } from "@/lib/data/products";
import ProductDetailClient from "./ProductDetailClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return menuData.Product.items.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = menuData.Product.items.find((item) => item.slug === slug);
  const content = productContent[slug];

  return (
    <ProductDetailClient
      slug={slug}
      title={item?.title || ""}
      desc={item?.desc || ""}
      href={item?.href || ""}
      content={content || null}
    />
  );
}
