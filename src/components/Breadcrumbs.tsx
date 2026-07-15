import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  path: string;
}

const routeNames: Record<string, string> = {
  '': 'Home',
  'portfolio': 'Portfolio',
  'about': 'About',
  'services': 'Services',
  'production': 'Production',
  'cinematography': 'Cinematography',
  'post-production': 'Post-Production',
  'directing': 'Directing',
  'aerial-drone': 'Aerial & Drone',
  'consulting': 'Consulting',
  'blog': 'Blog',
  'contact': 'Contact'
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', path: '/' }
  ];

  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: routeNames[segment] || segment,
      path: currentPath
    });
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://earthdogfilms.com${item.path === '/' ? '' : item.path}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default Breadcrumbs;
