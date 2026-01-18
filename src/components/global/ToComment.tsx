import { MessageCircleMoreIcon } from "@ui/animated/message-circle-more";
import { Button } from "@ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui/tooltip";

export const ToCommentButton = ({ className }: { className?: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <>
          {/* 電腦版回頂端按鈕 */}
          <Button
            id="to-comment-button"
            aria-label="Jump to comments"
            variant={"ghost"}
            className={`hidden lg:block backdrop-blur-md ${className}`}
            asChild
          >
            <MessageCircleMoreIcon
              size={20}
              className="text-white lg:rotate-90"
            />
          </Button>

          {/* 手機版回頂端按鈕 */}
          <Button
            id="to-comment-button-mobile"
            aria-label="Jump to comments"
            variant={"outline"}
            className={`lg:hidden block backdrop-blur-md ${className}`}
            asChild
          >
            <MessageCircleMoreIcon
              size={20}
              className="text-white lg:rotate-90"
            />
          </Button>
        </>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>前往留言區</p>
      </TooltipContent>
    </Tooltip>
  );
};
