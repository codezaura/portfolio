import Link from "next/link"
import Image from "next/image"

import { Logo } from "@/components/logo"
import { CONFIG } from "@/config-global"
import { socialConfig, SocialLink } from "./config-social"
import { IconButton } from "@/components/ui/icon-button"

// -----------------------------------------------------------------------

function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <IconButton
          key={link.url}
          href={link.url}
          target="_blank"
          icon={
            <Image
              width={16}
              height={16}
              alt={`${link.icon}-link`}
              src={`${CONFIG.site.baseUrl}/assets/icons/social/${link.icon}.svg`}
            />
          }
        />
      ))}
    </div>
  )
}

// -----------------------------------------------------------------------

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex items-center justify-between py-8">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={18} />
          <p>
            Codez<span className="font-medium">Aura</span>
          </p>
        </Link>

        <div className="h-4 w-0.5 rounded-full bg-accent-foreground"></div>

        <p className="text-sm">{currentYear} &copy; copyrights reserved</p>
      </div>

      <SocialLinks links={socialConfig.links} />
    </footer>
  )
}
