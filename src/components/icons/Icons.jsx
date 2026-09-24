const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function SunIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function MoonIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  )
}

export function CartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 3h2l2.2 12.2a1.5 1.5 0 0 0 1.5 1.3h8.9a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
      <circle cx="9" cy="20" r="1.3" />
      <circle cx="18" cy="20" r="1.3" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function MinusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
    </svg>
  )
}

export function TrashIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  )
}

export function ArrowLeftIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 12H4M11 5l-7 7 7 7" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTokIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 12.5a3.5 3.5 0 1 0 3.5 3.5V4h2.5c.4 2 1.6 3.2 3.5 3.6" />
    </svg>
  )
}

export function YouTubeIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.8 8.2A3 3 0 0 1 5.7 5.7C7.6 5.4 9.7 5.3 12 5.3s4.4.1 6.3.4a3 3 0 0 1 2.9 2.5c.18 1.2.3 2.3.3 3.8s-.12 2.6-.3 3.8a3 3 0 0 1-2.9 2.5c-1.9.3-4 .4-6.3.4s-4.4-.1-6.3-.4a3 3 0 0 1-2.9-2.5C2.62 14.5 2.5 13.4 2.5 12s.12-2.6.3-3.8Z" />
      <path d="M10 9l5.3 3L10 15V9Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function XIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  )
}

const iconMap = {
  sun: SunIcon,
  moon: MoonIcon,
  cart: CartIcon,
  menu: MenuIcon,
  close: CloseIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  trash: TrashIcon,
  arrowRight: ArrowRightIcon,
  arrowLeft: ArrowLeftIcon,
  check: CheckIcon,
  mail: MailIcon,
  mapPin: MapPinIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  x: XIcon,
}

export function BrandIcon({ name, size = 22, ...rest }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon width={size} height={size} {...rest} />
}