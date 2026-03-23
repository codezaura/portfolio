"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

// -----------------------------------------------------------------------

export type InternalNavigationType = {
  path: string
  title: string
}

// -----------------------------------------------------------------------

export function InternalNavigation({
  internalNavigations,
}: {
  internalNavigations: InternalNavigationType[]
}) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    // Intersection Observer tracks which heading is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" } // Triggers when heading is in top 20% of screen
    )

    // Observe all elements that have an ID matching our internalNavigations
    internalNavigations.forEach((item) => {
      const el = document.getElementById(item.path.replace("#", ""))
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [internalNavigations])

  return (
    <div className="hidden min-w-64 px-4 xl:block">
      <aside className="fixed top-24 w-56">
        <h5 className="text-sm font-semibold tracking-widest text-zinc-900 uppercase dark:text-zinc-100">
          On this page
        </h5>
        <ul className="mt-4 space-y-3 border-l border-zinc-200 dark:border-zinc-800">
          {internalNavigations.map((item) => {
            const id = item.path.replace("#", "")
            const isActive = activeId === id

            return (
              <li key={item.path} className="relative">
                <a
                  href={item.path}
                  className={cn(
                    "block pl-4 text-sm transition-colors hover:text-cyan-500",
                    // Apply indentation if it's a sub-item (H3)
                    // item.level === 2 ? "ml-4" : "",
                    isActive
                      ? "font-medium text-cyan-600 dark:text-cyan-400"
                      : "text-zinc-500 dark:text-zinc-400"
                  )}
                >
                  {/* Vertical bar for the active link */}
                  {isActive && (
                    <span className="absolute top-0 -left-px h-full w-0.5 rounded-xl bg-cyan-600 dark:bg-cyan-400" />
                  )}
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}
