// -------------------------------------------------------------

export interface NavItem {
  href: string
  value: string
}

// -------------------------------------------------------------

const navItems: NavItem[] = [
  {
    href: "/docs",
    value: "Docs",
  },
  {
    href: "/blog",
    value: "Blog",
  },
]

// -------------------------------------------------------------

export const navConfig = { navItems }
