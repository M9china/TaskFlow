

export const BreadcrumbList = ({ breadcrumbs }:any) => {
  const itemListElement = breadcrumbs.map((breadcrumb:any, index:number) => {
    return {
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': breadcrumb.url,
        name: breadcrumb.name,
      },
    };
  });

  const jsonLdData = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }} />
  );
};

export default BreadcrumbList;
