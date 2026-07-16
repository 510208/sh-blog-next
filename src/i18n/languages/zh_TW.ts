import Key from "../i18nKey";
import type { Translation } from "../translation";

export const zh_TW: Translation = {
  // 首頁
  [Key.home_recent_posts]: "最近更新",

  // 文章列表頁面
  [Key.posts_timeline_year_post_count_single]: "篇文章",
  [Key.posts_timeline_year_post_count_plural]: "篇文章",

  // 單篇文章
  [Key.post_released]: "文章發布時間",
  [Key.post_last_edited]: "更新時間",
  [Key.post_author]: "作者",
  [Key.post_tags]: "標籤",
  [Key.post_toc_title]: "目錄",
  [Key.post_estimated_reading_time]: "閱讀時間",
  [Key.post_estimated_reading_time_unit]: "分鐘",

  [Key.post_alt_cover_image]: "封面圖片",
  [Key.post_alt_default_cover_image]: "預設封面圖片",

  // 404頁面
  [Key.notfound_title]: "要找的東西不在這！",
  [Key.notfound_description]: "找不到目標的頁面，請查明後再開...",
  [Key.notfound_bsod_title_line_1]: "您的裝置發生問題，但我們不可能重新啟動。",
  [Key.notfound_bsod_title_line_2]:
    "我們根本不會收集任何錯誤資訊，所以你也別期待會為你重新啟動。",
  [Key.notfound_finished_percent_description]: "已完成",
  [Key.notfound_bsod_description_1]: "上網公審站長時，請提供此資訊：",
  [Key.notfound_bsod_description_2]: "停止代碼：THERE_IS_NOTHING",
  [Key.notfound_bsod_failed_item]: "失敗的項目：",
  [Key.notfound_press_any_key_1]: "按下",
  [Key.notfound_press_any_key_2]: "任意鍵",
  [Key.notfound_press_any_key_3]: "以返回首頁...",
  [Key.notfound_please_go_back_normal]:
    "如需此問題與可能修正的詳細資訊，請回去首頁。",
  [Key.notfound_please_go_back_rickroll]:
    "如需此問題與可能修正的詳細資訊，請前往 https://reurl.cc/jmEY8Z 觀看驚喜影片。",
  [Key.notfound_please_go_back_homo]:
    "如需此問題與可能修正的詳細資訊，請先重新看一遍銀夢（確信",

  // 文章集合為空通知
  [Key.empty_blog_title]: "文章在哪裡？",
  [Key.empty_blog_description]:
    "似乎沒有可用的文章，也許你可以建立一個... 或者複製一些過來？",
  [Key.empty_blog_refresh]: "重新整理",
  [Key.empty_blog_docs]: "了解更多",

  // GitHub 卡片（內建元件）
  [Key.github_card_public]: "公開儲存庫",
  [Key.github_card_private]: "私人儲存庫",
  [Key.github_card_archive]: "封存儲存庫",
  [Key.github_card_no_description]: "儲存庫中並未提供描述",
  [Key.github_card_updated_at]: "更新於",
  [Key.github_card_not_found]: "找不到所請求的儲存庫",

  // 分頁（內建元件）
  [Key.tabs_warning_multiple_default_open]:
    "警告：發現 {count} 個預設開啟的分頁項目",
  [Key.tabs_multiple_default_open_description]:
    "在同一個分頁組件中，只有一個分頁項目可以預設開啟（傳送參數 defaultOpen）。",
};
