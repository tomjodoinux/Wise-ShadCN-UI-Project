import type { CSSProperties } from "react"

const ICON_SRC: Record<
  "home" | "wallet" | "list" | "expand" | "users" | "chart",
  string
> = {
  home: "/assets/icons/home.svg",
  wallet: "/assets/icons/wallet.svg",
  list: "/assets/icons/list.svg",
  expand: "/assets/icons/expand.svg",
  users: "/assets/icons/users.svg",
  chart: "/assets/icons/chart.svg",
}

export type SidebarMenuIconName = keyof typeof ICON_SRC

type SidebarMenuIconProps = {
  name: SidebarMenuIconName
}

/**
 * Renders a nav icon from /public/assets/icons using CSS mask so `currentColor`
 * (via `bg-current`) follows sidebar menu text states.
 */
export function SidebarMenuIcon({ name }: SidebarMenuIconProps) {
  const src = ICON_SRC[name]
  const mask: CSSProperties = {
    maskImage: `url('${src}')`,
    maskSize: "100% 100%",
    maskPosition: "center",
    maskRepeat: "no-repeat",
    WebkitMaskImage: `url('${src}')`,
    WebkitMaskSize: "100% 100%",
    WebkitMaskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
  }

  return (
    <span
      aria-hidden
      className="pointer-events-none size-6 shrink-0 bg-current group-data-[collapsible=icon]:size-4"
      style={mask}
    />
  )
}
