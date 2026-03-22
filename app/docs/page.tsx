import type { Metadata } from "next"

import { CONFIG } from "@/config-global"
import { DocsView } from "@/sections/docs/view"

// -----------------------------------------------------------------------

export const metadata: Metadata = { title: `Docs | ${CONFIG.site.name}` }

export default function Page() {
  return <DocsView />
}
