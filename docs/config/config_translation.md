# Configuration File English Translation

The configuration file `shblog.config.ts` is originally written in Chinese (Traditional). Below is an English translation of the configuration options for your reference:

<!-- BEGIN:CONFIG_TRANSLATION -->

```ts
import { Newspaper, Handshake, Home, Info, Phone } from "lucide-react";
import type { ShBlogConfig } from "./src/types/shblog.config.d";

//
//    ______ _____  __             __   _  __        _____
//   / __/ // / _ )/ /__  ___ _    \ \ / |/ /____ __/ /\  \
//  _\ \/ _  / _  / / _ \/ _ `/     > >    / -_) \ / __/>  >
// /___/_//_/____/_/\___/\_, /     /_/_/|_/\__/_\_\\__//__/
//                      /___/
//    M a k e   B l o g g i n g   G r e a t   A g a i n
//
//
// SHBlog Next is a modern, high-performance blogging platform built with Astro v5 and shadcn/ui.
// It is designed specifically for content creators, providing a simple and efficient writing and publishing experience.
// Whether you are a tech blogger, lifestyle sharer, or professional writer, SHBlog Next can meet your needs,
// helping you easily build your personal brand and share your stories and knowledge with readers worldwide.

const config: ShBlogConfig = {
  // Site Name
  //   This name will be displayed in the browser tab, website header, and search engine results
  title: "SamHacker Blog",

  // Site Description
  //   This description will be displayed in the website header and search engine results
  description:
    "I am a tech enthusiast blogger, focusing on Minecraft server setup, website construction, open-source software, and other fields.",

  // Site Language (using IETF language tags)
  //   This language setting affects SEO and accessibility features. Unless necessary, please set it to the primary language of the site without further changes.
  lang: "en-US",

  // Site Icon (favicon) path
  //   This icon appears in the browser tab and bookmarks. The provided path should be relative to the site's root directory.
  //   For example, if the icon is at example.com/favicon.ico, the path should be /favicon.ico
  favicon: "/favicon.png",

  // Page Settings
  //   These settings affect the titles, subtitles, and top background images of various pages on the site
  pages: {
    // Home Page Settings
    //   The home page is usually the entry point of the website. Here you can set the title and top background image of the home page.
    home: {
      title:
        "Because I have walked in the rain,\nI want to hold an umbrella for others.", // Text displayed on the homepage. Not necessarily a title; can be a motto, slogan, or catchphrase.
      heroImage: "/assets/layouts/homepage/samhacker_homepage_background.png", // Path to the homepage hero image. High-resolution images are recommended for better display on large screens.
      greetings: [
        // Greeting message settings based on different times
        //   begin: Start time (inclusive), 0-24 hour format
        //   finish: End time (exclusive), 0-24 hour format. If not provided, only matches the exact hour specified in begin
        //   text: Greeting message content
        // 🚨 Note: Rules that appear earlier have higher priority
        {
          begin: 0,
          finish: 6,
          text: "Good late night, time to rest!",
        },
        {
          begin: 6,
          finish: 12,
          text: "Good morning! A new day begins!",
        },
        {
          begin: 12,
          finish: 14,
          text: "Good afternoon! Remember to have lunch!",
        },
        {
          begin: 14,
          finish: 18,
          text: "Good afternoon! Is work going smoothly?",
        },
        {
          begin: 18,
          finish: 21,
          text: "Good evening! Getting ready for the night!",
        },
        {
          begin: 21,
          finish: 24,
          text: "Good night! Sweet dreams!",
        },
        {
          text: "Hello!",
        },
      ],
    },

    // Static Pages Settings
    //    These pages usually do not change frequently and are suitable for displaying information about the website or the author
    other: {
      search: {
        title: "Search", // Page title
        subTitle: "Search for what you are looking for...", // Page subtitle
        heroImage: "/assets/layouts/homepage/samhacker_homepage_background.png", // Hero image path
      },
      friends: {
        title: "Friends",
        subTitle:
          "This is a list of my friends or recommended websites. Feel free to visit them and support their creations!",
        heroImage: "/assets/layouts/homepage/samhacker_homepage_background.png",
      },
      about: {
        title: "About Me & This Site",
        subTitle: "Introduction page for myself and this website.",
        heroImage: "/assets/layouts/homepage/samhacker_homepage_background.png",
      },
    },
  },

  // Style Settings
  style: {
    heroImage: {
      from: 80, // Fade-in start opacity. Higher values mean lower transparency.
      to: 100, // Fade-in end opacity. Higher values mean lower transparency.
      src: "/assets/layouts/homepage/samhacker_homepage_background.png", // Hero image path
      method: "overlay", // Image display method. Options: "mask" (native mask via CSS mask property, experimental) or "overlay" (semi-transparent div overlay for soft gradients, recommended).
    },
    defaultPostImage:
      "/assets/layouts/homepage/samhacker_homepage_background.png", // Default post thumbnail if no cover is specified
    postsPerPage: 6, // Number of posts displayed per page on the homepage
    titleSeparator: "-", // Website title separator for browser tabs and SEO, e.g., "Post Title - Site Name"
    enableTransitions: false, // Whether to enable page transition animations
    enableRecentPosts: false, // Whether to display a "Recent Posts" section on the homepage
  },

  // Author (Webmaster) Information
  author: {
    name: "John Doe", // Author's name
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", // Short bio
    // For a detailed bio, please edit src/pages/about.astro

    email: "johndoe@example.com", // Contact email
    // Full URL or relative path for the avatar image
    avatarUrl: "https://placehold.jp/128x128.png",

    // Social Media Links
    links: [
      // For additional social icons, please add corresponding icon mappings in the AuthorCard component
      {
        icon: "X",
        to: "https://twitter.com/xux510208",
        label: "X",
      },
      {
        icon: "Github",
        to: "https://github.com/510208",
        label: "GitHub",
      },
    ],
  },

  // Navbar Settings
  navBar: {
    // Add menu items following this format:
    // {
    //   title: "Logo",  // Menu display name
    //   href: "/",      // Target URL (relative, external, or absolute)
    //   icon: Home,     // Menu icon. Import from lucide-react; used for mobile menus.
    // }
    links: [
      {
        title: "Home",
        href: "/",
        icon: Home,
      },
      {
        title: "Blog",
        href: "/blog",
        icon: Newspaper,
      },
      {
        title: "About",
        href: "/about",
        icon: Info,
      },
      {
        title: "Friends",
        href: "/friends",
        icon: Handshake,
      },
      {
        title: "Contact",
        href: "https://510208.github.io/about",
        icon: Phone,
      },
    ],
  },

  // Friend Links Settings
  friendLinks: [
    // Add friend links following this format. Used for link exchanges or recommendations.
    // {
    //   title: "Site Name",           // Name of the linked site
    //   imgUrl: "/path/to/image.png", // Icon of the linked site. Square images recommended.
    //   desc: "Site Description",     // Short site introduction
    //   siteUrl: "https://example.com", // Site URL
    //   tags: ["Tag 1", "Tag 2"],     // Optional tags for classification
    // }

    {
      title: "SamHacker",
      imgUrl:
        "https://gravatar.com/avatar/f7598bd8d4aba38d7219341f81a162fc842376b3b556b1995cbb97271d9e2915?v=1753291388000&size=256&d=initials",
      desc: "A tech enthusiast blogger focused on Minecraft server hosting, web dev, and open source.",
      siteUrl: "https://510208.github.io",
      tags: ["Personal Site"],
    },
  ],

  // Behavior Settings
  behavior: {
    commentConfig: {
      enableComment: "Giscus", // Whether to enable article comments

      // Comment system settings, effective when enableComment is true
      // For Giscus configuration, refer to: https://giscus.app/
      // The following settings correspond to data- attributes in the giscus script tag.
      giscusConfig: {
        repo: "510208/utterances",
        repoId: "R_kgDOKOthQw",
        category: "Announcements",
        categoryId: "DIC_kwDOKOthQ84Czwi8",
        mapping: "og:title",
        strict: "0",
        reactionsEnabled: "1",
        emitMetadata: "1",
        inputPosition: "top",
        theme: "transparent_dark",
        lang: "en", // Changed to English for consistency
      },

      // For Utterances configuration, refer to: https://utteranc.es/
      utterancesConfig: {
        repo: "510208/utterances",
        issueTerm: "pathname",
        label: "comment",
        theme: "github-light",
      },
    },

    // Whether to enable Google Tag Manager for traffic analysis
    enableGTM: true,
    // GTM settings, effective when enableGTM is true
    gtmConfig: {
      googleTagManagerId: "GTM-N2SPWPQW", // Enter your GTM ID here
    },

    // Whether to enable the 404 page easter egg. May not work with Cloudflare Workers.
    enable404EasterEgg: true,

    tableOfContents: {
      enable: true, // Whether to show Table of Contents on post pages
      minDepth: 2, // Minimum heading depth to display (e.g., 2 for h2)
      maxDepth: 4, // Maximum heading depth to display (e.g., 4 for h4). -1 for all levels.
    },

    // Pangu.js Chinese Auto-spacing Settings
    //   If the site content contains a lot of mixed Asian and English text, this feature can improve readability.
    //   However, it increases build time, so use it judiciously.
    //   Note: Modifying these settings may require restarting the development server (or rebuilding the site) to take effect.
    //   Please modify the settings in src/plugins/rehype-pangu.mjs
    // panguJs: {};
  },

  // Footer Social Media Settings
  footer: {
    // Footer Description
    description:
      "Hello! I am a tech enthusiast blogger focusing on Minecraft server setup, web development, open-source software, and more. Welcome to my blog!",
    // Find socialMedia names on https://simpleicons.org/ (case sensitive)
    // For custom icons, provide a full URL or a relative path from the root.
    links: [
      {
        socialMedia: "Threads",
        url: "https://www.threads.com/@samhacker.xyz",
      },
    ],

    // Website Copyright Information Settings
    copyright: {
      text: "CC BY-NC 4.0", // Copyright usage description text
      url: "https://creativecommons.org/licenses/by-nc/4.0/", // Copyright usage description link URL (e.g., Creative Commons, MIT, GPL, etc.)
      yearUpdateStrategy: "auto", // Copyright year update strategy, "auto" means automatically update to the current year, "fixed" means the year when the site was compiled. For a fixed year, directly fill in the year number, e.g., 2023
    },
    countryEmoji: "🇹🇼", // Country flag emoji, e.g., Taiwan flag 🇹🇼
  },
};

export default config; // Export the configuration object
```

<!-- END:CONFIG_TRANSLATION -->
