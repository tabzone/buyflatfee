export default function sitemap() {
  const baseUrl = 'https://www.buyflatfee.com';
  const now = new Date().toISOString();

  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/how-it-works', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/calculator', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
