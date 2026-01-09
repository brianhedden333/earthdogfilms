import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO = ({
  title = "Earth Dog Films - Cinematic Storytelling for Brands and Movements",
  description = "Earth Dog Films creates powerful, emotionally resonant video content for mission-driven brands, educators, and changemakers. Story-first production company specializing in brand films, documentaries, and campaign videos.",
  canonical,
  type = "website",
  image = "https://earthdogfilms.com/lovable-uploads/edf-logo-2025.png",
  noindex = false,
  structuredData
}: SEOProps) => {
  const siteUrl = "https://earthdogfilms.com";
  const fullTitle = title.includes("Earth Dog Films") ? title : `${title} | Earth Dog Films`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
