import client from './contentfulClient';

export const revalidate = 30;

export default async function sitemap() {
  const res = await client.getEntries({
    content_type: 'exclusivefab',
  });
  const data = res.items;

  const post = data.map((item) => ({
    url: `https://www.naijaleakhub.com.ng/${item.fields.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.5,
  }));

  return [
    {
      url: 'https://www.naijaleakhub.com.ng',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://www.naijaleakhub.com.ng/teen',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: 'https://www.naijaleakhub.com.ng/blowjob',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: 'https://www.naijaleakhub.com.ng/lesbian',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: 'https://www.naijaleakhub.com.ng/celebrities',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: 'https://www.naijaleakhub.com.ng/masturbation',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    ...post,
  ];
}
