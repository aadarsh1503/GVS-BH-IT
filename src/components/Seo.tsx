import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title:
    'Global Vision Solutions is Digital Software Development/Designing near you',
  siteName: 'Global Vision Solutions',
  description:
    'Global Vision Solutions is a website designing and development company, which will helps clients achieve their business objectives and promote themselves in the digital World.',
  url: 'https://axstudios.tech',
  type: 'website',
  robots: 'follow, index',
  image: '/images/large-og.png',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      <meta
        name='keywords'
        content='
  Software Development, 
  Custom Software Solutions, 
  Web Development, 
  eCommerce Solutions, 
  eCommerce Development, 
  Digital Marketing Services, 
  SEO Services, 
  Social Media Marketing, 
  Mobile App Development, 
  Cloud Solutions, 
  IT Consulting, 
  Website Design, 
  UX/UI Design, 
  Content Management Systems, 
  Agile Development, 
  API Development, 
  Business Intelligence, 
  Data Analytics, 
  Digital Transformation, 
  Brand Strategy, 
  Online Marketing, 
  Search Engine Marketing, 
  PPC Advertising, 
  Email Marketing, 
  Web Hosting Services, 
  Software Maintenance, 
  Quality Assurance, 
  Project Management
'
      />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@axstudioss' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta name='author' property='article:author' content='Ax Studios' />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}
const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/images/logo/gvs.svg',
  },
  {
    rel: 'icon',
    type: 'image/svg',
    sizes: '32x32',
    href: '/images/logo/gvs.svg',
  },
  {
    rel: 'icon',
    type: 'image/svg',
    sizes: '16x16',
    href: '/images/logo/gvs.svg',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/images/logo/gvs.svg',
    color: '#eb6a50',
  },
  { rel: 'shortcut icon', href: '/images/logo/gvs.svg' },
];
