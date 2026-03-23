"use client"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { highlightCode } from "@/lib/shiki"

// -----------------------------------------------------------------------

export function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const { resolvedTheme } = useTheme()
  const [html, setHtml] = useState<string>("")

  useEffect(() => {
    async function update() {
      const highlighted = await highlightCode(
        code,
        lang,
        resolvedTheme || "dark"
      )
      setHtml(highlighted)
    }
    update()
  }, [code, lang, resolvedTheme])

  if (!html)
    return (
      <pre className="rounded-md bg-zinc-900 p-4">
        <code>{code}</code>
      </pre>
    )

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
