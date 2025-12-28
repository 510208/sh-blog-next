export function FriendAvatar({
  link,
  fallback,
  ...props
}: {
  link: string;
  fallback: string;
}) {
  return (
    <img
      src={link}
      alt="網站logo"
      className="w-28 h-28 shrink-0 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-900 object-cover"
      {...props}
    />
  );
}
