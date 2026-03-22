import { cn } from "@/lib/utils"

// -----------------------------------------------------------------------

interface ContainerProps {
  children: React.ReactNode
  maxWidth?: "sm" | "md" | "lg" | "full"
  className?: string
}

// -----------------------------------------------------------------------

export function Container({
  children,
  maxWidth = "md",
  className,
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-3xl",
    md: "max-w-6xl",
    lg: "max-w-8xl",
    full: "max-w-full",
  }

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-col px-2 md:px-12",
        maxWidthClasses[maxWidth] || "max-w-5xl",
        className
      )}
    >
      {children}
    </div>
  )
}
