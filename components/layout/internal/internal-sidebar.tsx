"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { DocsLogo } from "@/components/logo"
import { SidebarItem } from "@/types/sidebar-item"

// -----------------------------------------------------------------------

export function InternalSidebar({
  sidebarItems,
}: {
  sidebarItems?: SidebarItem[]
}) {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="h-12">
            <Link href="/">
              <DocsLogo size={18} />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems?.map((item) => {
                const isActive = item.children?.some(
                  (child) => pathname === child.url
                )

                // Capitalize for React
                const Icon = item.icon

                return (
                  <SidebarMenuItem key={item.title}>
                    {item.children ? (
                      <Collapsible
                        className="group/collapsible"
                        defaultOpen={isActive}
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            {Icon && <Icon className="size-4" />}
                            <span className="font-medium">{item.title}</span>
                            <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === subItem.url}
                                >
                                  <Link href={subItem.url} className="w-full">
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton
                        isActive={pathname === item.url}
                        tooltip={item.title}
                      >
                        <Link
                          href={item.url || "#"}
                          className="flex w-full items-center gap-2"
                        >
                          {Icon && <Icon className="size-4" />}
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
