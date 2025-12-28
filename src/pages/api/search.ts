import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { getCollection } from "astro:content";

// export const prerender = false;

export async function GET({ url }: { url: URL }): Promise<Response> {
  const query = url.searchParams.get("query");

  if (!query) {
    return new Response(
      JSON.stringify({ error: "No query provided", results: [] }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  const window = new JSDOM("").window;

  const purify = DOMPurify(window);

  const safeQuery = purify.sanitize(query);
  const allPosts = await getCollection("blog", ({ data }) => {
    // 開發環境顯示所有文章,生產環境過濾掉 draft 文章
    if (import.meta.env.DEV) return true;
    return data.draft !== true;
  });

  const results = allPosts
    .filter(
      (post) =>
        post.data.title.toLowerCase().includes(safeQuery.toLowerCase()) ||
        post.data.description?.toLowerCase().includes(safeQuery.toLowerCase())
    )
    .map((post) => ({
      title: post.data.title,
      slug: post.id,
      link: `/blog/${post.id}`,
      description: post.data.description,
    }));
  return new Response(JSON.stringify({ results }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
