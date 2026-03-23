import type { Metadata } from "next"
import { FundamentalsView } from "@/sections/docs/fundamentals/view"

// -----------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Fundamentals",
  description: `Core knowledge of programming and fundamentals of web development and much more`,
}

// -----------------------------------------------------------------------

export default function Page() {
  return <FundamentalsView />
}
