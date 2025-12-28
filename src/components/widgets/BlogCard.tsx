"use client";

import { Card, CardContent } from "@/components/ui/card.tsx";
import { Tag } from "lucide-react";
import Tags from "../ui/Tags.tsx";
import { useEffect, useState } from "react";
import config from "shblog.config";
import { CalendarDaysIcon } from "../ui/animated/calendar-days.tsx";
import { BookmarkIcon } from "../ui/animated/bookmark.tsx";

interface BlogCardProps {
  title: string;
  description?: string;
  pubDate: string; // ISO string from server
  heroImage?: string;
  href: string;
  isLoading?: boolean;
  category: string | string[] | null;
  tags: string[] | null;
}

export default function BlogCard({
  title,
  description,
  pubDate,
  heroImage,
  href,
  category,
  tags,
  isLoading = false,
}: BlogCardProps) {
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const date = new Date(pubDate);
    setFormattedDate(
      date.toLocaleDateString(config.lang || "zh-Hant", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    setIsHydrated(true);
  }, [pubDate]);

  return (
    <a href={href} className="block">
      <Card
        className={`backdrop-blur-[10px] border border-white/10 rounded-[14px] transition-all hover:border-white/20 ${
          isLoading ? "bg-neutral-800" : "bg-neutral-900"
        }`}
      >
        <CardContent className="flex flex-col gap-2.5">
          {/* Image */}
          <div className="h-45 rounded-2xl overflow-hidden bg-neutral-700">
            {!isLoading && heroImage && (
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Title */}
          <h3
            className={`text-xl font-bold leading-normal ${
              isLoading
                ? "h-8 bg-neutral-700 rounded-md animate-pulse"
                : "text-white"
            }`}
          >
            {!isLoading && title}
          </h3>

          {/* Description */}
          {!isLoading && description && (
            <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}

          {/* Metadata */}
          <div className="flex items-center gap-3 text-sm text-neutral-500 flex-wrap">
            {!isLoading && isHydrated ? (
              <>
                {/* 文章發表日期 */}
                <div className="flex items-center gap-1.5">
                  <CalendarDaysIcon size={16} />
                  <time dateTime={pubDate}>{formattedDate}</time>
                </div>

                {/* 估計閱讀時間 */}
                {/* <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div> */}

                {/* 文章標籤 */}
                {tags && (
                  <div className="flex items-center gap-1.5">
                    <Tag size={16} />
                    <Tags tags={tags} />
                  </div>
                )}

                {/* 文章分類 */}
                {category && (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <BookmarkIcon size={16} />
                    {(Array.isArray(category) ? category : [category]).map(
                      (cat, idx) => (
                        <span key={idx}>
                          <a
                            className="hover:text-white transition-all"
                            href={`/blog/categories/${cat.toLowerCase()}`}
                          >
                            <span>{cat}</span>
                          </a>
                          {idx <
                            (Array.isArray(category) ? category : [category])
                              .length -
                              1 && <span className="mx-1">,</span>}
                        </span>
                      )
                    )}
                  </div>
                )}
              </>
            ) : isLoading ? (
              <div className="h-5 w-32 bg-neutral-700 rounded-md animate-pulse" />
            ) : null}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
