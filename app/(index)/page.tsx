import { AppView } from "@/sections/app/view"
import type { Metadata } from "next"

// -----------------------------------------------------------------------

export const metadata: Metadata = {
  title: `CodezAura`,
  description: "Welcome to the home page of codezaura",
}

// -----------------------------------------------------------------------

export default function Page() {
  return <AppView />
}
