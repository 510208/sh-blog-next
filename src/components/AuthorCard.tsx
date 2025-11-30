import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, MessageSquare } from "lucide-react";

export default function AuthorCard() {
  return (
    <Card className="bg-neutral-800 border border-white/10 rounded-[14px] p-[18px] relative overflow-hidden">
      <CardContent className="p-0">
        {/* Background decoration */}
        <div className="absolute bottom-0 right-0 w-[169px] h-[169px] opacity-40 pointer-events-none">
          <img
            src="/favicon.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-neutral-800"></div>
        </div>

        <div className="relative flex gap-[15px]">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
            <img
              src="/favicon.png"
              alt="SamHacker"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-white text-lg font-bold mb-2">SamHacker</h3>
            <p className="text-white text-sm leading-5 mb-2.5">
              我是一個熱愛分享技術的部落客，
              <br />
              專注於 Minecraft 開服、網站建設、開源軟體等領域。
              <br />
              我的目標是讓更多人能夠輕鬆學習和應用技術。
            </p>

            {/* Social links */}
            <div className="flex gap-7 p-2.5">
              <a
                href="https://github.com/510208"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://discord.gg/yourserver"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label="Discord"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
