export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'regX AI',
    description:
      'Infrastructure for enforcing AI trust and deterministic decisioning throughout the AI lifecycle',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://regxai.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://regxai.com'}/logo.png`,
    sameAs: [
      // Add your social media links here
      // 'https://twitter.com/regxai',
      // 'https://linkedin.com/company/regxai',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      // email: 'contact@regxai.com',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'regX AI',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://regxai.com',
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

