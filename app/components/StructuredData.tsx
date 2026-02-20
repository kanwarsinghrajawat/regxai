import { getSiteUrl } from '../../content/metadata';
import { contactEmail } from '../../content/footer';

export function StructuredData() {
  const siteUrl = getSiteUrl();
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'regX AI',
    description:
      'Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: ['https://x.com/regX_AI'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: contactEmail,
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'regX AI',
    url: siteUrl,
    description:
      'Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle',
    publisher: {
      '@type': 'Organization',
      name: 'regX AI',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

