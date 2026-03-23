"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { CONFIG } from "@/config-global"

// -----------------------------------------------------------------------

interface SkillIconProps {
  size?: number
  className?: string
  onClick?: () => void
  name:
    | "javascript"
    | "typescript"
    | "cpp"
    | "java"
    | "rust"
    | "go"
    | "python"
    | "kotlin"
    | "php"
    | "ruby"
    | "html"
    | "css"
    | "sass"
    | "scss"
    | "less"
    | "md"
    | "mdx"
    | "react-js"
    | "node-js"
    | "next-js"
    | "express-js"
    | "mongodb"
    | "postgres"
    | "mysql"
    | "vue-js"
    | "angular-js"
    | "electron-js"
    | "npm"
    | "cloudflare"
    | "git"
    | "github"
    | "gitlab"
    | "mui"
    | "tailwind-css"
    | "motion"
    | "gsap"
    | "vscode"
}

// -----------------------------------------------------------------------

export function SkillIcon({
  name,
  onClick,
  className,
  size = 16,
}: SkillIconProps) {
  return (
    <code
      onClick={onClick}
      className={cn("mx-1 inline-flex items-center gap-1", className)}
    >
      <span className="inline-block">{name.replace("-", "")}</span>

      <Image
        width={size}
        height={size}
        alt={`${name}-image`}
        className="inline-flex"
        src={`${CONFIG.site.baseUrl}/assets/icons/skill/ic-${name}.svg`}
      />
    </code>
  )
}
