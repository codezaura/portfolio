import Link from "next/link"

import { MoveDownLeft, MoveUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// -----------------------------------------------------------------------

interface NavigatorProps {
  href: string
  title: string | React.ReactNode
}
// -----------------------------------------------------------------------

function NavigationNext({ href, title }: NavigatorProps) {
  return (
    <Link href={href}>
      <Card className="min-w-72 hover:outline-2 hover:outline-cyan-600/32">
        <CardContent className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-2xl">Next</span>
            <span className="text-sm font-medium text-zinc-700">{title}</span>
          </div>

          <MoveUpRight size={20} />
        </CardContent>
      </Card>
    </Link>
  )
}

// -----------------------------------------------------------------------

function NavigationPrevious({ href, title }: NavigatorProps) {
  return (
    <Link href={href}>
      <Card className="min-w-72 hover:outline-2 hover:outline-cyan-600/32">
        <CardContent className="flex items-center justify-between gap-4">
          <MoveDownLeft size={20} />

          <div className="flex flex-col items-end">
            <span className="text-2xl">Previous</span>
            <span className="text-sm font-medium text-zinc-700">{title}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

// -----------------------------------------------------------------------

function Navigator({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-16 mb-8 flex flex-col gap-4 md:flex-row">{children}</div>
  )
}

// -----------------------------------------------------------------------

Navigator.Next = NavigationNext

Navigator.Previous = NavigationPrevious

export { Navigator }
