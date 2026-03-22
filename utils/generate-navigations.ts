import { SidebarItem } from "@/types/sidebar-item"

// -------------------------------------------------------------

export function generateInternalNavigations(sidebarItems: SidebarItem[]) {
  return sidebarItems.map((sidebarItem) =>
    Array.isArray(sidebarItem.children)
      ? sidebarItem.children
      : [sidebarItem.children]
  )
}
