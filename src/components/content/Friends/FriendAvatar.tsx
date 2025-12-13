import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function FriendAvatar({
  link,
  fallback,
  ...props
}: {
  link: string;
  fallback: string;
}) {
  return (
    // <Avatar className="w-28 h-28 shrink-0" {...props}>
    //   <AvatarImage src={link} alt="網站logo" className="object-cover" />
    //   <AvatarFallback>{fallback.charAt(0).toUpperCase()}</AvatarFallback>
    // </Avatar>
    <img
      src={link}
      alt="網站logo"
      className="w-28 h-28 shrink-0 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-900 object-cover"
    />
  );
}
