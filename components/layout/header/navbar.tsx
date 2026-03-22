import Link from "next/link"
import { type NavItem } from "./config-nav"

// -----------------------------------------------------------------------

export function NavBar({ navItems }: { navItems: NavItem[] }) {
  return (
    <nav className="flex items-center justify-between gap-6">
      {navItems.map((navItem) => (
        <Link
          key={navItem.href}
          href={navItem.href}
          className="font-sans text-sm opacity-60 hover:opacity-100"
        >
          {navItem.value}
        </Link>
      ))}
    </nav>
  )
}
