import { paths } from "@/routes/paths"
import { Telescope } from "lucide-react"
import type { SidebarItem } from "@/types/sidebar-item"

// -------------------------------------------------------------

const sidebarItems: SidebarItem[] = [
  {
    title: "Introduction",
    icon: Telescope,
    children: [
      { title: "Getting started", url: paths.docs.gettingStarted },
      { title: "Fundamentals", url: paths.docs.fundamentals },
      // {
      //   title: "Core knowledge",
      //   url: paths.docs.gettingStarted.coreKnowledge,
      // },
    ],
  },
  //   {
  //     title: "Core",
  //     icon: Cpu,
  //     children: [
  //       { title: "Source file", url: paths.docs.core.sourceFile },
  //       {
  //         title: "Text Editor",
  //         url: paths.docs.core.textEditor,
  //       },
  //       { title: "Git", url: paths.docs.core.git },
  //     ],
  //   },
]

const flatDocsLinks = sidebarItems.flatMap((section) => section.children)

// -------------------------------------------------------------

export const docsConfig = { sidebarItems, flatDocsLinks }
