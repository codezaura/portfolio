"use client"

import { Code } from "lucide-react"

// -----------------------------------------------------------------------

export function Logo({ size }: { size?: number }) {
  return (
    <div aria-labelledby="logo" className="flex items-center gap-2">
      <Code size={size} strokeWidth={3} />
      <p className="mt-0">
        Codez<span className="font-medium">Aura</span>
      </p>
    </div>
  )
}

// -----------------------------------------------------------------------

export function DocsLogo({ size }: { size?: number }) {
  return (
    <div aria-labelledby="logo" className="flex items-center gap-2">
      <Code size={size} strokeWidth={3} />
      <p className="mt-0 flex items-center text-lg font-normal text-accent-foreground">
        Codez<span className="font-medium">Aura</span>
        <span className="ml-1 rounded-lg bg-primary px-2 py-0.5 text-xs font-medium text-white">
          Docs
        </span>
      </p>
    </div>
  )
}
