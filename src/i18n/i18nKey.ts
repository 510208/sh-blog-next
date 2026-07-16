enum I18nKey {
  // 首頁
  home_recent_posts = "Recent Posts",

  // 文章列表頁面
  posts_timeline_year_post_count_single = "post",
  posts_timeline_year_post_count_plural = "posts",

  // 單篇文章
  post_released = "Released on",
  post_last_edited = "Last edited on",
  post_author = "Author",
  post_tags = "Tags",
  post_toc_title = "Table of Contents",
  post_estimated_reading_time = "Reading time",
  post_estimated_reading_time_unit = "min",

  post_alt_cover_image = "Cover image",
  post_alt_default_cover_image = "Default cover image",

  // 404頁面
  notfound_title = "The page you visited does not exist",
  notfound_description = "I can't find the page you are looking for, please check if the URL is correct.",
  notfound_bsod_title_line_1 = "Your PC ran into a problem and needs to restart. We're just collecting some error info, but we won't restart for you.",
  notfound_bsod_title_line_2 = "We don't collect any error information at all, so don't expect a restart for you.",
  notfound_finished_percent_description = "Completed",
  notfound_bsod_description_1 = "When criticizing website administrators online, please provide this information:",
  notfound_bsod_description_2 = "Stop code: THERE_IS_NOTHING",
  notfound_bsod_failed_item = "The item that failed:",
  notfound_press_any_key_1 = "Press",
  notfound_press_any_key_2 = "any key",
  notfound_press_any_key_3 = "to come back to the homepage...",

  notfound_please_go_back_normal = "For more information about this issue and possible fixes, visit our homepage.",
  notfound_please_go_back_rickroll = "For more information about this issue and possible fixes, visit https://reurl.cc/jmEY8Z.",
  notfound_please_go_back_homo = "For detailed information on this issue and possible fixes, please review Silver Dream again. (surely",

  // 部落格集合為空的通知訊息
  empty_blog_title = "Where is the post?",
  empty_blog_description = "Seems there is no post that is available to use, maybe you can create one... or copy some?",
  empty_blog_refresh = "Refresh",
  empty_blog_docs = "Learn More",

  // 內建組件 - GitHubCard
  github_card_public = "Public",
  github_card_private = "Private",
  github_card_archive = "Archive",
  github_card_no_description = "No description provided.",
  github_card_updated_at = "Updated at",
  github_card_not_found = "Not Found",

  // 內建組件 - Tabs
  tabs_warning_multiple_default_open = 'Warning: Multiple TabItem components have data-default-open="true". Only the first one will be used as the default active tab.\nFound {count} occurrences of data-default-open="true".',
  tabs_multiple_default_open_description = 'The default active tab is determined by the first TabItem component with "defaultOpen" attribute.',
}

export default I18nKey;
