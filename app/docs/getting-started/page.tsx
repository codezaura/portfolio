import type { Metadata } from "next"
import { GettingStartedView } from "@/sections/docs/getting-started/view"

// -----------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Getting started",
  description: "Unfold the story of learning and programming world",
}

// -----------------------------------------------------------------------

export default function Page() {
  return <GettingStartedView />
}
