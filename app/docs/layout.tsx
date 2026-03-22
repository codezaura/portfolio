"use client"

import { InternalLayout } from "@/components/layout/internal"
import { docsConfig } from "@/sections/docs/config-docs"

// -----------------------------------------------------------------------

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <InternalLayout sidebarItems={docsConfig.sidebarItems}>
      {children}
    </InternalLayout>
  )
}
