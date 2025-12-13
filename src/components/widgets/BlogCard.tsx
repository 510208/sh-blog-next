import { Card, CardContent } from "@/components/ui/card.tsx";
import { Clock, Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  description?: string;
  pubDate: Date;
  heroImage?: string;
  href: string;
  isLoading?: boolean;
}

export default function BlogCard({
  title,
  description,
  pubDate,
  heroImage,
  href,
  isLoading = false,
}: BlogCardProps) {
  return (
    <a href={href} className="block">
      <Card
        className={`backdrop-blur-[10px] border border-white/10 rounded-[14px] overflow-hidden transition-all hover:border-white/20 ${
          isLoading ? "bg-neutral-800" : "bg-neutral-900"
        }`}
      >
        <CardContent className="flex flex-col gap-2.5">
          {/* Image */}
          <div className="h-[180px] rounded-2xl overflow-hidden bg-neutral-700">
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
          <div className="flex items-center gap-3 text-sm text-neutral-500">
            {!isLoading ? (
              <>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={pubDate.toISOString()}>
                    {pubDate.toLocaleDateString("zh-Hant", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </>
            ) : (
              <div className="h-5 w-32 bg-neutral-700 rounded-md animate-pulse" />
            )}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
