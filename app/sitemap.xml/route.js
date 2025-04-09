import { NextResponse } from 'next/server';
import client from '../contentfulClient';

export const revalidate = 60;

export async function GET() {
  const res = await client.getEntries({ content_type: 'exclusivefab' });
  const posts = res.items;

  const staticUrls = [
    '',
    'teen',
    'blowjob',
    'lesbian',
    'celebrities',
    'masturbation',
  ];

  const urls = staticUrls.map(
    (path) => `
    <url>
      <loc>https://www.naijaleakhub.com.ng/${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${path === '' ? 1.0 : 0.5}</priority>
    </url>
  `
  );

  const dynamicUrls = posts.map((item) => {
    return `
    <url>
      <loc>https://www.naijaleakhub.com.ng/${item.fields.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.5</priority>
    </url>
    `;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
    ${dynamicUrls.join('')}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
