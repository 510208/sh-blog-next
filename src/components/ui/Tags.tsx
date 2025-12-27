"use client";

import { Hash, MoreHorizontal } from "lucide-react";
import { Badge } from "./badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";

interface TagsProps {
  tags?: string[] | null;
}

export default function Tags({ tags }: TagsProps) {
  if (!tags || tags.length === 0) return null;

  const [first, ...rest] = tags;

  return (
    <div className="tags-list flex items-center gap-2">
      <a href={`/blog/tags/${first.toLowerCase()}`} className="tag-link">
        <Badge variant="secondary" className="px-2 text-sm">
          <Hash size={14} />
          {first}
        </Badge>
      </a>

      {rest.length > 0 && (
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              aria-haspopup="true"
              className="tag-more inline-flex items-center px-2 py-1 rounded text-sm bg-neutral-800 hover:bg-neutral-700 transition"
              tabIndex={0}
            >
              <MoreHorizontal size={14} />
            </button>
          </TooltipTrigger>

          <TooltipContent
            sideOffset={8}
            className="min-w-40 bg-neutral-900 border border-white/10 rounded-md p-2 shadow-lg z-999"
          >
            <div className="flex flex-col gap-2">
              {rest.map((tag) => (
                <a
                  key={tag}
                  href={`/blog/tags/${tag.toLowerCase()}`}
                  className="inline-flex"
                >
                  <Badge variant="secondary" className="px-2 text-sm">
                    <Hash size={14} />
                    {tag}
                  </Badge>
                </a>
              ))}
            </div>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}
