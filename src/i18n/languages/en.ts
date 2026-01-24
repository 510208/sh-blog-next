import Key from "../i18nKey";
import type { Translation } from "../translation";

export const en: Translation = {
  // 首頁
  [Key.home_recent_posts]: "Recent Posts",

  // 文章列表頁面
  [Key.posts_timeline_year_post_count_single]: "post",
  [Key.posts_timeline_year_post_count_plural]: "posts",

  // 單篇文章
  [Key.post_released]: "Released on",
  [Key.post_last_edited]: "Last edited on",
  [Key.post_author]: "Author",
  [Key.post_tags]: "Tags",
  [Key.post_toc_title]: "Table of Contents",

  // 404頁面
  [Key.notfound_title]: "The page you visited does not exist",
  [Key.notfound_description]:
    "I can't find the page you are looking for, please check if the URL is correct.",
  [Key.notfound_bsod_title_line_1]:
    "Your PC ran into a problem and needs to restart. We're just collecting some error info, but we won't restart for you.",
  [Key.notfound_bsod_title_line_2]:
    "We don't collect any error information at all, so don't expect a restart for you.",
  [Key.notfound_finished_percent_description]: "Completed",
  [Key.notfound_bsod_description_1]:
    "When criticizing website administrators online, please provide this information:",
  [Key.notfound_bsod_description_2]: "Stop code: THERE_IS_NOTHING",
  [Key.notfound_bsod_failed_item]: "The item that failed:",
  [Key.notfound_press_any_key_1]: "Press",
  [Key.notfound_press_any_key_2]: "any key",
  [Key.notfound_press_any_key_3]: "to come back to the homepage...",
};
