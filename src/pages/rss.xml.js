import rss from '@astrojs/rss';
import { publishedPosts } from '../lib/posts';
export async function GET(context) {
  const posts = await publishedPosts();
  return rss({
    title: 'Tuna Security Research',
    description: 'Technical research on malware analysis and reverse engineering.',
    site: context.site,
    items: posts.map(post => ({ title: post.data.title, description: post.data.description, pubDate: post.data.pubDate, link: `/blog/${post.id}/` })),
  });
}
