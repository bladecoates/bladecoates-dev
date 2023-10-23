import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function get(context) {
  const blog = await getCollection("blog", ({ data }) => {
    return data.draft === false;
  });
  const links = await getCollection("links", ({ data }) => {
    return data.draft === false;
  });
  const rsscontent = blog
    .concat(links)
    .sort(
      (a, b) =>
        b.data.dates.published.valueOf() - a.data.dates.published.valueOf()
    );
  return rss({
    //customData: '<atom:link href="https://bladecoates.dev/rss.xml" rel="self" type="application/rss+xml" />',
    stylesheet: "/rss/pretty-feed-v3.xsl",
    title: "Blade Coates Blog",
    description:
      "Constantly evolving my problem-solving, development, and leadership skills.",
    site: context.site,
    items: rsscontent.map((post) => ({
      title: post.data.title,
      pubDate: post.data.dates.published,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body)),
      link: `/${post.data.type}/${post.slug}`,
    })),
    trailingSlash: false,
  });
}
