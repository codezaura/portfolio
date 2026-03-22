import Link from "next/link"

import { Logo } from "@/components/logo"
import { ThemeSwitcher } from "@/components/theme"
import { navConfig } from "./config-nav"
import { NavBar } from "./navbar"

// -----------------------------------------------------------------------

export function Header() {
  return (
    <header className="flex justify-between py-8">
      <Link href="/">
        <Logo size={18} />
      </Link>

      <div className="flex items-center gap-6">
        <ThemeSwitcher />
        <NavBar navItems={navConfig.navItems} />
      </div>
    </header>
  )
}
