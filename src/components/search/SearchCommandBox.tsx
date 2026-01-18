import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@ui/command";
import { useEffect, useRef, useState } from "react";

type SearchEntry = {
  title: string;
  slug: string;
  link: string;
  description?: string;
};

declare global {
  interface Window {
    pagefind: any;
  }
}

export function SearchCommandBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [pagefindReady, setPagefindReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debounceTimer = useRef<number | null>(null);

  // 初始化 Pagefind
  useEffect(() => {
    const initPagefind = async () => {
      try {
        // 等待 pagefind 物件出現
        let attempts = 0;
        while (!window.pagefind && attempts < 30) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          attempts++;
        }

        if (!window.pagefind) {
          setError("Pagefind 未載入。請確認已執行 pnpm build");
          return;
        }

        await window.pagefind.init();
        setPagefindReady(true);
        setError(null);
      } catch (err) {
        console.error("Pagefind 初始化失敗:", err);
        setError("搜尋功能初始化失敗");
        setPagefindReady(false);
      }
    };

    initPagefind();
  }, []);

  const handleSearchChange = async (search: string) => {
    if (debounceTimer.current) {
      window.clearTimeout(debounceTimer.current);
    }

    if (!search || !pagefindReady) {
      setResults([]);
      return;
    }

    debounceTimer.current = window.setTimeout(async () => {
      try {
        const searchResults = await window.pagefind.search(search);

        if (!searchResults?.results) {
          setResults([]);
          return;
        }

        const formattedResults: SearchEntry[] = await Promise.all(
          searchResults.results.slice(0, 10).map(async (result: any) => {
            try {
              const data = await result.data();
              return {
                title: data.meta?.title || data.title || "未命名",
                slug: result.id,
                link: data.url || `/blog/${result.id}`,
                description: data.excerpt || data.meta?.description,
              };
            } catch (err) {
              console.error("解析搜尋結果失敗:", err);
              return null;
            }
          }),
        );

        setResults(formattedResults.filter(Boolean) as SearchEntry[]);
      } catch (err) {
        console.error("Pagefind 搜尋失敗:", err);
        setResults([]);
      }
    }, 500);
  };

  return (
    <div>
      <Command
        filter={(value, search, keywords) => {
          handleSearchChange(search);
          const extendValue = value + " " + (keywords?.join(" ") || "");
          if (extendValue.toLowerCase().includes(search.toLowerCase())) {
            return 1;
          }
          return 0;
        }}
      >
        <CommandInput
          placeholder="所以今天要看什麼呢..."
          value={query}
          onValueChange={setQuery}
          disabled={!pagefindReady}
        />
        <CommandList>
          {error && (
            <div className="px-2 py-2 text-sm text-red-500">⚠️ {error}</div>
          )}

          {!pagefindReady && !error && (
            <div className="px-2 py-2 text-sm text-muted-foreground">
              搜尋功能載入中...
            </div>
          )}

          {pagefindReady && query && results.length === 0 && (
            <CommandEmpty>
              找不到結果，請試著清除關鍵字重試或修改目標關鍵字
            </CommandEmpty>
          )}

          {results.length > 0 && (
            <CommandGroup heading="搜尋結果">
              {results.map((r) => (
                <CommandItem
                  key={r.slug}
                  value={r.title}
                  keywords={[r.description || ""]}
                  onSelect={() => {
                    window.location.href = r.link;
                  }}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{r.title}</span>
                    {r.description ? (
                      <span className="text-sm opacity-70">
                        {r.description}
                      </span>
                    ) : null}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </div>
  );
}
