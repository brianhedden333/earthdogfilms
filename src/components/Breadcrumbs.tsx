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
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="py-3 px-6 bg-stone-100">
        <ol className="flex items-center space-x-2 max-w-6xl mx-auto text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-stone-400" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-stone-600 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="text-red-600 hover:text-red-700 hover:underline flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
