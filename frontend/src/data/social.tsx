export interface SocialItem {
  show?: boolean;
  href?: string;
  title?: string;
}

export const social: { [key: string]: SocialItem; } = {
  facebook: {
    show: false,
    href: "#none",
    title: "Facebook",
  },
  instagram: {
    show: false,
    href: "#none",
    title: "Instagram",
  },
  twitter: {
    show: true,
    href: "https://twitter.com/HodoNetwork",
    title: "Twitter",
  },
  github: {
    show: false,
    href: "https://github.com/Hodo-Network",
    title: "GitHub",
  },
  dribbble: {
    show: false,
    href: "#none",
    title: "Dribbble",
  },
  discord: {
    show: true,
    href: "https://discord.gg/vYcZj5Fgfy",
    title: "Discord",
  },
  email: {
    show: true,
    href: "mailto:info@hodo.network",
    title: "Email",
  },
};