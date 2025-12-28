import { useEffect, useMemo, useState } from "react";
import BlogCard from "../widgets/BlogCard.tsx";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "../ui/pagination.tsx";
import { DEFAULT_POST_IMAGE } from "@/consts.ts";

type Post = {
  id: string;
  data: {
    title: string;
    description?: string;
    pubDate: string; // serialized ISO string
    heroImage?: { src: string } | null;
    category: string | string[] | null;
    tags: string[] | null;
  };
};

export default function BlogListClient({
  posts,
  postsPerPage = 2,
}: {
  posts: Post[];
  postsPerPage?: number;
}) {
  const parsedPosts = useMemo(() => {
    return posts.map((p) => ({
      ...p,
      data: {
        ...p.data,
        pubDate: new Date(p.data.pubDate),
      },
    }));
  }, [posts]);

  const getPageFromUrl = () => {
    try {
      const sp = new URLSearchParams(window.location.search);
      const p = Number(sp.get("page")) || 1;
      return p > 0 ? p : 1;
    } catch (e) {
      return 1;
    }
  };

  const [currentPage, setCurrentPage] = useState<number>(getPageFromUrl());

  useEffect(() => {
    const onPop = () => setCurrentPage(getPageFromUrl());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const totalPages = Math.max(1, Math.ceil(parsedPosts.length / postsPerPage));

  useEffect(() => {
    // keep currentPage in range
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return parsedPosts.slice(start, start + postsPerPage);
  }, [parsedPosts, currentPage, postsPerPage]);

  const goto = (page: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", String(page));
    window.history.pushState({}, "", url.toString());
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-3">
        {paginated.map((post) => (
          <BlogCard
            key={post.id}
            title={post.data.title}
            description={post.data.description}
            pubDate={post.data.pubDate.toISOString()}
            heroImage={post.data.heroImage?.src || DEFAULT_POST_IMAGE}
            category={post.data.category}
            tags={post.data.tags}
            href={`/blog/${post.id}/`}
            isLoading={false}
          />
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious onClick={() => goto(currentPage - 1)} />
            </PaginationItem>
          )}

          {Array.from({ length: totalPages }).map((_, idx) => {
            const page = idx + 1;
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => goto(page)}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationNext onClick={() => goto(currentPage + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </>
  );
}
