import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import Image from "next/image"
import { CONFIG } from "@/config-global"
import { IconButton } from "@/components/ui/icon-button"
import { ThemeSwitcher } from "@/components/theme"

// -----------------------------------------------------------------------

interface HeaderProps {
  hideLogo?: boolean
  className?: string
  slots?: {
    leftAreaEnd?: React.ReactNode
    rightAreaStart?: React.ReactNode
  }
}

// -----------------------------------------------------------------------

export function Header({ hideLogo = false, slots, className }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 px-6 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div
        className={cn(
          "mx-auto flex h-16 items-center justify-between",
          className
        )}
      >
        <div className="flex items-center gap-6">
          {!hideLogo && <Logo size={18} />}

          {slots?.leftAreaEnd}
        </div>

        {/* Right: Actions & GitHub */}
        <div className="flex items-center gap-4">
          {slots?.rightAreaStart}
          {/* Quick Search Trigger (Visual only) */}
          {/* <button className="hidden lg:flex items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Quick search...</span>
            <kbd className="ml-4 font-sans text-xs font-semibold text-zinc-300">
              Ctrl K
            </kbd>
          </button> */}

          <div className="mx-1 hidden h-6 w-px bg-zinc-200 sm:block dark:bg-zinc-800"></div>

          <ThemeSwitcher />

          <IconButton
            href="https://github.com/codezaura"
            target="_blank"
            variant="outline"
            icon={
              <Image
                width={20}
                height={20}
                alt={`github-link`}
                src={`${CONFIG.site.baseUrl}/assets/icons/social/ic-github.svg`}
              />
            }
          />
        </div>
      </div>
    </header>
  )
}
