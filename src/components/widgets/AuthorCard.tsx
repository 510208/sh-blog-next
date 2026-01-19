import { Card } from "@ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import React from "react";
import * as SimpleIcons from "@icons-pack/react-simple-icons";

interface LinksProp {
  icon: string;
  to: string;
  label: string;
}

interface AuthorCardProps {
  image: string;
  name: string;
  slug: string;
  description: React.ReactNode;
  links: LinksProp[];
}

const isImageUrl = (str: string): boolean => {
  return /^\/.*\.(png|jpg|jpeg|gif|svg|webp)$/i.test(str);
};

// 將 SimpleIcon 名稱轉換為 @icons-pack/react-simple-icons 的元件名稱
// 注意：iconName 應該已經是符合套件匯出格式的 PascalCase，例如 "Github"、"X"、"Linkedin"
const getSimpleIconComponentName = (iconName: string): string => {
  // 直接加上 "Si" 前綴，使用傳入的名稱，不再嘗試變更大小寫
  return `Si${iconName}`;
};

function AuthorCard({
  image,
  name,
  slug,
  description,
  links,
}: AuthorCardProps) {
  return (
    <Card className="relative p-4 bg-gray-800 overflow-hidden">
      {/* 裝飾性背景圖 - 右下角 */}
      <div className="absolute right-0 bottom-0 w-[171px] h-[171px] opacity-40 pointer-events-none">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at bottom right, rgba(31,41,55,0) 0%, rgba(31,41,55,1) 68.75%)",
          }}
        />
      </div>

      {/* 卡片內容 */}
      <div className="flex justify-start gap-4 relative z-10">
        <Avatar className="w-12 h-12">
          <AvatarImage src={image} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1 w-full">
          <h3 className="text-lg font-bold">{name}</h3>
          <h4 className="text-sm font-semibold opacity-30">@{slug}</h4>
          <p className="text-sm">{description}</p>
          <div className="text-xs gap-2 flex flex-wrap mt-2">
            {links.map((link) => {
              const isUrl = isImageUrl(link.icon);
              let IconComponent:
                | (React.ComponentType<{ size: number }>)
                | undefined;

              if (!isUrl) {
                const iconComponentName = getSimpleIconComponentName(link.icon);
                IconComponent = SimpleIcons[
                  iconComponentName as keyof typeof SimpleIcons
                ] as React.ComponentType<{ size: number }> | undefined;
              }
              return (
                <Tooltip key={link.label}>
                  <TooltipTrigger asChild>
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="inline-flex items-center justify-center p-1 rounded transition-colors"
                    >
                      {isUrl ? (
                        <img
                          src={link.icon}
                          alt=""
                          className="w-5 h-5 object-contain"
                        />
                      ) : IconComponent ? (
                        <IconComponent size={20} />
                      ) : null}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AuthorCard;
