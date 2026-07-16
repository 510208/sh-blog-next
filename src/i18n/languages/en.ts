import Key from "../i18nKey";
import type { Translation } from "../translation";

export const en: Translation = {
  // Homepage
  [Key.home_recent_posts]: "Recent Posts",

  // Post list page
  [Key.posts_timeline_year_post_count_single]: "post",
  [Key.posts_timeline_year_post_count_plural]: "posts",

  // Single Post page
  [Key.post_released]: "Released on",
  [Key.post_last_edited]: "Last edited on",
  [Key.post_author]: "Author",
  [Key.post_tags]: "Tags",
  [Key.post_toc_title]: "Table of Contents",
  [Key.post_estimated_reading_time]: "Reading time",
  [Key.post_estimated_reading_time_unit]: "min",

  [Key.post_alt_cover_image]: "Cover image",
  [Key.post_alt_default_cover_image]: "Default cover image",

  // 404 page
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
  [Key.notfound_please_go_back_normal]:
    "For more information about this issue and possible fixes, visit our homepage.",
  [Key.notfound_please_go_back_rickroll]:
    "For more information about this issue and possible fixes, visit https://reurl.cc/jmEY8Z.",
  [Key.notfound_please_go_back_homo]:
    "For detailed information on this issue and possible fixes, please review Silver Dream again. (surely",

  // Notice of Blog content is not found
  [Key.empty_blog_title]: "Where is the post?",
  [Key.empty_blog_description]:
    "Seems there is no post that is available to use, maybe you can create one... or copy some?",
  [Key.empty_blog_refresh]: "Refresh",
  [Key.empty_blog_docs]: "Learn More",

  // GitHub Card (Built-in component)
  [Key.github_card_public]: "Public",
  [Key.github_card_private]: "Private",
  [Key.github_card_archive]: "Archive",
  [Key.github_card_no_description]: "No description provided.",
  [Key.github_card_updated_at]: "Updated at",
  [Key.github_card_not_found]: "Not Found",

  // Built-in Components - Tabs
  [Key.tabs_warning_multiple_default_open]:
    'Warning: Multiple TabItem components have data-default-open="true". Only the first one will be used as the default active tab.\nFound {count} occurrences of data-default-open="true".',
  [Key.tabs_multiple_default_open_description]:
    'The default active tab is determined by the first TabItem component with "defaultOpen" attribute.',
};
