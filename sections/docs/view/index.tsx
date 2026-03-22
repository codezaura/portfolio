"use client"

import { paths } from "@/routes/paths"
import {
  Navigator,
  InternalNavigation,
} from "@/components/layout/internal/navigation"
import { useInternalNavigations } from "@/components/layout/internal/navigation/use-internal-navigations"

// -----------------------------------------------------------------------

export function DocsView() {
  const internalNavigations = useInternalNavigations()

  return (
    <>
      <div className="flex-1">
        <h1 className="font-medium">Introduction</h1>
        <p>
          Our ultimate documentary for mastering web development and much more!
        </p>

        <p>
          <span className="font-medium">Written on experiences!</span>
          <br />
          You&apos;ll always find something? Whether you&apos;re an absolute
          beginner or an experienced developer, Our docs has something for
          everyone. 🤩
        </p>

        <Navigator>
          <Navigator.Next
            title="Getting started"
            href={paths.docs.gettingStarted}
          />
        </Navigator>
      </div>

      <InternalNavigation internalNavigations={internalNavigations} />
    </>
  )
}
