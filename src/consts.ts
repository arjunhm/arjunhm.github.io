// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

import type nav from "./i18n/nav";
import ui from "./i18n/ui";
import type { SupportedLanguage } from "./utils/i18n";

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  },
  settings: {
    paginationSize: number,
  },
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
  value: string;
}

export const SUPPORTED_LANGUAGES = {
  'en': 'en',
};

export const DEFAULT_LANG = SUPPORTED_LANGUAGES.en as SupportedLanguage;

export const siteConfig: Config = {
  title: ui[DEFAULT_LANG]["site.title"].text,
  description: ui[DEFAULT_LANG]["site.description"].text,
  lang: DEFAULT_LANG,
  profile: {
    author: "Arjun Handli",
    description: ui[DEFAULT_LANG]["profile.description"].text
  },
  settings: {
    paginationSize: 10
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const SOCIAL_LINKS: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/arjunhm",
    value: "arjunhm"
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://linkedin.com/in/arjun-hm/",
    value: "arjun-hm"
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:hm.arjun97@gmail.com",
    value: "hm.arjun97 at gmail dot com"
  },
  {
    icon: "mdi:note",
    friendlyName: "resume",
    link: "/resume.pdf",
    value: "resume"
  }
];

// NOTE: match these entries with keys in `src/i18n/nav.ts`
export const NAV_LINKS: Array<keyof typeof nav[SupportedLanguage]> = [
  "home", "about", "blog", "projects"
];

export const ABOUT_ME: string = "backend engineer. exploring systems and databases."