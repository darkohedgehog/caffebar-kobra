/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.caffebar-kobra.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,

  alternateRefs: [
    {
      href: 'https://www.caffebar-kobra.vercel.app/hr',
      hreflang: 'hr',
    },
    {
      href: 'https://www.caffebar-kobra.vercel.app/en',
      hreflang: 'en',
    },
  ],

  exclude: [
    '/api/*',
    '/_next/*',
    '/404',
    '/500',
  ],

  // ⬇️ uklonjen "config" parametar
  additionalPaths: async () => {
    const paths = [
      '',
      '/uvjeti-koristenja',
      '/prigovor',
      '/contact',
    ];

    const locales = ['hr', 'en'];

    return paths.flatMap((path) =>
      locales.map((locale) => ({
        loc: `/${locale}${path}`,
        changefreq: 'monthly',
        priority: path === '' ? 1.0 : 0.6,
        lastmod: new Date().toISOString(),
      }))
    );
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};