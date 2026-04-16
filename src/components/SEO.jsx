import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { LOCATIONS } from "@/constants/locations";

const SITE_NAME = "Colegio Isaac Newton";
const SITE_URL = import.meta.env.VITE_SITE_URL || "https://inewton.edu.pe";
const DEFAULT_TITLE = `${SITE_NAME} | Educación de excelencia en Cajamarca`;
const DEFAULT_DESCRIPTION =
  "Colegio Privado de Ciencias Isaac Newton: educación de excelencia en Cajamarca y Los Baños del Inca, con formación integral en primaria y secundaria.";
const DEFAULT_IMAGE = "/Logo-pagina-web.png";

const getSiteOrigin = () => {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }

  return SITE_URL;
};

const buildAbsoluteUrl = (origin, value) => {
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  if (!origin) return value;
  return `${origin}${value.startsWith("/") ? value : `/${value}`}`;
};

const defaultOrganizationSchema = (origin) => ({
  "@context": "https://schema.org",
  "@type": "School",
  name: SITE_NAME,
  url: origin || undefined,
  logo: buildAbsoluteUrl(origin, DEFAULT_IMAGE),
  image: buildAbsoluteUrl(origin, DEFAULT_IMAGE),
  email: "admision@inewton.edu.pe",
  telephone: "+51 953 751 275",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: LOCATIONS.cajamarca.shortAddress,
      addressLocality: "Cajamarca",
      addressCountry: "PE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: LOCATIONS.banos.shortAddress,
      addressLocality: "Los Baños del Inca",
      addressCountry: "PE",
    },
  ],
  sameAs: [
    "https://www.facebook.com/IsaacNewtonCajamarca",
    "https://www.instagram.com/colegio_isaac_newton/?hl=es-la",
    "https://www.youtube.com/@ColegioPrivadoIsaacNewton",
    "https://www.tiktok.com/@colegio_isaacnewton",
  ],
});

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
  canonicalPath,
  structuredData,
}) => {
  const location = useLocation();
  const origin = getSiteOrigin();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = buildAbsoluteUrl(origin, currentPath);
  const imageUrl = buildAbsoluteUrl(origin, image);

  const schemas = [
    defaultOrganizationSchema(origin),
    ...(structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : []),
  ];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="author" content={SITE_NAME} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:locale" content="es_PE" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
