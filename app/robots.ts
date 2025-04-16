// robots.txt (app/robots.js or public/robots.txt)
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://lucasboinet.fr/sitemap.xml',
  };
}