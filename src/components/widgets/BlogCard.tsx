"use client";

import { Card, CardContent, CardHeader } from "@ui/card.tsx";
import { Tag } from "lucide-react";
import Tags from "@ui/Tags.tsx";
import { useEffect, useState } from "react";
import config from "@shConfig";
import { CalendarDaysIcon } from "@ui/animated/calendar-days.tsx";

import { navigate } from "astro:transitions/client";

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
      }),
    );
    setIsHydrated(true);
  }, [pubDate]);

  const handleCardClick = () => {
    navigate(href);
  };

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleCardClick} className="block cursor-pointer">
      <Card
        className={`min-h-110 gap-3 overflow-hidden rounded-[14px] border border-white/10 p-0 backdrop-blur-[10px] transition-all hover:border-white/20 ${
          isLoading ? "bg-neutral-800" : "bg-neutral-900"
        } group relative flex h-full flex-col`}
      >
        {/* 背景圖層 */}
        {!isLoading && heroImage && (
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[14px]">
            <img
              src={heroImage}
              alt=""
              role="presentation"
              className="h-full w-full scale-110 object-cover opacity-10 blur-[20px] transition-all duration-300 group-hover:opacity-15 group-hover:blur-[3px]"
            />
          </div>
        )}

        <CardHeader className="relative z-10 p-0 pb-0">
          {/* Image */}
          <div className="h-50 overflow-hidden bg-neutral-700">
            {!isLoading && heroImage && (
              <img
                src={heroImage}
                alt={title}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </CardHeader>

        <CardContent className="relative z-10 flex flex-1 flex-col gap-2.5 p-6 pt-0">
          {/* 主要內容區塊（flex-1 撐開空間） */}
          <div className="flex-1">
            {/* 文章分類 */}
            {category && (
              <div>
                {/* <a
                  className="hover:text-white transition-all font-mono text-sm text-neutral-400"
                  href="#"
                  onClick={handleCategoryClick}
                > */}
                <span className="tracking-[0.5em]">
                  {Array.isArray(category) ? category[0] : category}
                </span>
                {/* </a> */}
              </div>
            )}
            {/* Title */}
            <h3
              className={`text-xl leading-normal font-bold ${
                isLoading
                  ? "h-8 animate-pulse rounded-md bg-neutral-700"
                  : "text-white"
              }`}
            >
              {!isLoading && title}
            </h3>
            {/* Description */}
            {!isLoading && description && (
              <p className="line-clamp-2 text-sm leading-relaxed text-neutral-400">
                {description}
              </p>
            )}
          </div>
          {/* Metadata - 固定放在底部 */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
            {!isLoading && isHydrated ? (
              <>
                {/* 文章發表日期 */}
                <div className="flex items-center gap-1.5">
                  <CalendarDaysIcon size={16} />
                  <time dateTime={pubDate}>{formattedDate}</time>
                </div>

                {/* 文章標籤 */}
                {tags && (
                  <div
                    className="flex items-center gap-1.5"
                    onClick={handleCategoryClick}
                  >
                    <Tag size={16} />
                    <Tags tags={tags} />
                  </div>
                )}
              </>
            ) : isLoading ? (
              <div className="h-5 w-32 animate-pulse rounded-md bg-neutral-700" />
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
