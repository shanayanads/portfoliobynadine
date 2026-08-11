import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

const siteUrl = 'https://silly-cactus-baad1c.netlify.app/'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nadine N. Paco',
  alternateName: 'Nadine Paco',
  url: siteUrl,
  image: `${siteUrl}assets/nadine-paco-portrait.webp`,
  telephone: '09670827220',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Manila City',
    addressCountry: 'PH',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'FEU Institute of Technology',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'STI College Sta. Mesa',
    },
  ],
  knowsAbout: [
    'Web design',
    'Digital skills',
    'Customer support',
    'Administrative support',
    'Operations support',
    'Written communication',
  ],
  description:
    'Motivated college student in Manila seeking entry-level opportunities to learn, contribute, and grow professionally.',
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: "Nadine Paco's Portfolio | Entry-Level Professional" },
      {
        name: 'description',
        content:
          'Portfolio of Nadine Paco, a motivated college student seeking entry-level opportunities to learn, contribute, develop professional skills, and grow her career.',
      },
      {
        name: 'keywords',
        content:
          'Nadine Paco, Nadine N. Paco, Nadine Paco portfolio, Manila college student, entry-level professional, entry-level jobs, web design, digital skills, customer support, administrative support, operations support',
      },
      { name: 'author', content: 'Nadine N. Paco' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'theme-color', content: '#663D48' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:site_name', content: "Nadine Paco's Portfolio" },
      { property: 'og:title', content: "Nadine Paco's Portfolio" },
      {
        property: 'og:description',
        content:
          'Meet Nadine Paco, a motivated Manila college student ready to learn, contribute, and grow in an entry-level opportunity.',
      },
      { property: 'og:url', content: siteUrl },
      { property: 'og:image', content: `${siteUrl}assets/nadine-paco-portrait.webp` },
      { property: 'og:image:alt', content: 'Nadine Paco professional portrait' },
      { property: 'profile:first_name', content: 'Nadine' },
      { property: 'profile:last_name', content: 'Paco' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Nadine Paco's Portfolio" },
      {
        name: 'twitter:description',
        content:
          'A motivated college student seeking entry-level opportunities to learn, contribute, and grow.',
      },
      { name: 'twitter:image', content: `${siteUrl}assets/nadine-paco-portrait.webp` },
    ],
    links: [
      { rel: 'canonical', href: siteUrl },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
