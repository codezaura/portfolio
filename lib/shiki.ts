"use server"
import { codeToHtml } from "shiki"

// -------------------------------------------------------------

export async function highlightCode(code: string, lang: string, theme: string) {
  return await codeToHtml(code, {
    lang,
    theme: "github-dark-default",
  })
}
