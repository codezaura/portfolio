import { LucideIcon } from "lucide-react"

// -------------------------------------------------------------

export interface SidebarChildItem {
  title: string
  url: string
}

// -------------------------------------------------------------

export interface SidebarItem {
  title: string
  icon?: LucideIcon
  url?: string
  children?: SidebarChildItem[]
}
