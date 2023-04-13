import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const blog = await getCollection('blog', ({ data }) => {
  return data.draft === false;
});
  return rss({
    title: 'BladeCoates.dev Blog',
    description: 'Constantly evolving my problem-solving, development, and leadership skills.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.summary,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}`,
    })),
  });
}