export interface SocialLink {
  url: string
  icon: string
}

// -------------------------------------------------------------

const links: SocialLink[] = [
  { url: "https://github.com/codezaura", icon: "ic-github" },
  { url: "", icon: "ic-linkedin" },
  { url: "https://x.com/codezaura", icon: "ic-twitter-x" },
]

// -------------------------------------------------------------

export const socialConfig = { links }
