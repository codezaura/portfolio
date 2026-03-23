import { cn } from "@/lib/utils"
import {
  Navigator,
  InternalNavigation,
  InternalNavigationType,
  type NavigatorProps,
} from "@/components/layout/internal/navigation"

// -----------------------------------------------------------------------

interface DocsOutletProps {
  children: React.ReactNode
  className?: string
  navigatorProps?: {
    next?: NavigatorProps
    previous?: NavigatorProps
  }
  internalNavigations: InternalNavigationType[]
}

// -----------------------------------------------------------------------

export function DocsOutlet({
  children,
  className,
  navigatorProps,
  internalNavigations,
}: DocsOutletProps) {
  return (
    <>
      <div className={cn("flex-1", className)}>
        {children}

        <Navigator>
          {navigatorProps?.previous && (
            <Navigator.Previous
              href={navigatorProps.previous.href}
              title={navigatorProps.previous.title}
            />
          )}

          {navigatorProps?.next && (
            <Navigator.Next
              href={navigatorProps.next.href}
              title={navigatorProps.next.title}
            />
          )}
        </Navigator>
      </div>

      <InternalNavigation internalNavigations={internalNavigations} />
    </>
  )
}
