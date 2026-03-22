"use client"

import { useEffect, useState } from "react"
import type { InternalNavigationType } from "@/components/layout/internal/navigation"

// -------------------------------------------------------------

export function useInternalNavigations() {
  const [navItems, setNavItems] = useState<InternalNavigationType[]>([])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2[id], h3[id]"))

    const menuItems = elements.map((el) => ({
      path: `#${el.id}`,
      title: el.textContent || "",
      // level: parseInt(el.tagName.replace("H", ""), 10),
    }))

    console.log(menuItems)

    setNavItems(menuItems)
  }, [])

  return navItems
}
