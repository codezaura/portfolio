import { SidebarItem } from "@/types/sidebar-item"

import { Header } from "./internal-header"
import { InternalSidebar } from "./internal-sidebar"
import { SidebarProvider, SidebarTrigger } from "../../ui/sidebar"

// -----------------------------------------------------------------------

export function InternalLayout({
  children,
  sidebarItems,
}: {
  children: React.ReactNode
  sidebarItems?: SidebarItem[]
}) {
  return (
    <SidebarProvider>
      <InternalSidebar sidebarItems={sidebarItems} />

      <div className="flex w-full flex-col">
        <Header hideLogo slots={{ leftAreaEnd: <SidebarTrigger /> }} />
        <main className="flex gap-4 px-16 py-12">{children}</main>
      </div>
    </SidebarProvider>
  )
}
