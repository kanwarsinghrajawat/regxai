import { getSiteUrl } from "../../content/metadata";
import { JsonLd } from "./JsonLd";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

/**
 * Renders BreadcrumbList structured data for a page.
 * Pass an ordered list of breadcrumb items (the last item is the current page).
 */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const siteUrl = getSiteUrl();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return <JsonLd data={breadcrumbSchema} />;
}
