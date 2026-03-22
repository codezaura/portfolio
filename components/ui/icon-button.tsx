"use client"

import Link from "next/link"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"

// -----------------------------------------------------------------------

interface IconButtonProps {
  href: string
  icon: React.ReactNode
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | "link"
  target?: "_blank" | "_parent" | "_self" | "_top"
}

// -----------------------------------------------------------------------

export function IconButton({
  href,
  icon,
  target,
  variant = "outline",
}: IconButtonProps) {
  const { resolvedTheme } = useTheme()

  return (
    <Link
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ variant, size: "icon-sm" }),
        "flex items-center justify-center"
      )}
    >
      <div className={cn(resolvedTheme === "dark" ? "invert" : "")}>{icon}</div>
    </Link>
  )
}
