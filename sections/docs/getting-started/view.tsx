"use client"

import { paths } from "@/routes/paths"

import {
  Navigator,
  InternalNavigation,
} from "@/components/layout/internal/navigation"
import { useInternalNavigations } from "@/components/layout/internal/navigation/use-internal-navigations"
import Image from "next/image"
import { CONFIG } from "@/config-global"

// -----------------------------------------------------------------------

export function GettingStartedView() {
  const internalNavigations = useInternalNavigations()

  return (
    <>
      <div className="flex-1">
        <h1 className="font-medium">Getting started</h1>

        <p>
          Let&apos;s unfold the programming and development realm!
          <br />
          Here is everything! Whatever you need to build your first project,
          from <code>JavaScript</code> & <code>React</code> to{" "}
          <code>Node.js</code>, <code>Git</code>, <code>GitHub</code>,{" "}
          <code>Next.js</code> and beyond.
        </p>

        <div className="mt-8 flex flex-wrap gap-6">
          {techStack.map((icon) => (
            <Image
              key={icon}
              alt={icon}
              src={`${CONFIG.site.baseUrl}/assets/icons/skill/${icon}.svg`}
              width={60}
              height={60}
            />
          ))}
        </div>

        <Navigator>
          <Navigator.Previous title="Welcome" href={paths.docs.root} />
          <Navigator.Next title="Fundamentals" href={paths.docs.fundamentals} />
        </Navigator>
      </div>

      <InternalNavigation internalNavigations={internalNavigations} />
    </>
  )
}

// -----------------------------------------------------------------------

const techStack = [
  "ic-javascript",
  "ic-typescript",
  "ic-react-js",
  "ic-mui",
  "ic-node-js",
  "ic-mongodb",
  "ic-next-js",
  "ic-npm",
  "ic-tailwind-css",
  "ic-express-js",
  "ic-css",
  "ic-git",
  "ic-vscode",
  "ic-html",
  "ic-cloudflare",
]
