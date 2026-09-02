import type { SVGProps } from "react";

export type IconName =
  | "bolt"
  | "devices"
  | "calendar"
  | "chat"
  | "sparkles"
  | "tv"
  | "rocket"
  | "shield"
  | "stick"
  | "box"
  | "phone"
  | "tablet"
  | "desktop"
  | "live"
  | "ball"
  | "film"
  | "hd"
  | "grid"
  | "wave"
  | "globe"
  | "check"
  | "arrow"
  | "menu"
  | "close"
  | "whatsapp"
  | "mail"
  | "plus"
  | "minus"
  | "star"
  | "send"
  | "quote"
  | "play"
  | "users"
  | "headset"
  | "search"
  | "gear"
  | "face"
  | "telegram";

const paths: Record<IconName, JSX.Element> = {
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l1-8Z" />,
  devices: (
    <>
      <rect x="2" y="4" width="14" height="10" rx="1.5" />
      <path d="M2 18h14M17 9h5v9a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V9Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <path d="M3 9.5h18M8 3v4M16 3v4" />
    </>
  ),
  chat: <path d="M4 5h16v11H9l-5 4V5Z" />,
  sparkles: (
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3ZM19 14l.9 2.3 2.3.9-2.3.9L19 20.4l-.9-2.3-2.3-.9 2.3-.9L19 14Z" />
  ),
  tv: (
    <>
      <rect x="2.5" y="4.5" width="19" height="13" rx="2" />
      <path d="M8 21h8M12 17.5V21" />
    </>
  ),
  rocket: (
    <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2m1.5-3.5 7-7A6 6 0 0 1 20 4a6 6 0 0 1-.5 3.5l-7 7-3-.5-1.5-3.5Zm4.5-1.5h.01" />
  ),
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />,
  stick: (
    <>
      <rect x="8" y="3" width="8" height="12" rx="2" />
      <path d="M12 15v3M9 21h6" />
    </>
  ),
  box: (
    <>
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="M7 12h6M16.5 12h.5" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  tablet: (
    <>
      <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  desktop: (
    <>
      <rect x="2.5" y="4" width="19" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  live: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M6.5 6.5a8 8 0 0 0 0 11M17.5 6.5a8 8 0 0 1 0 11M3.5 3.5a12 12 0 0 0 0 17M20.5 3.5a12 12 0 0 1 0 17" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7l4 3-1.5 5h-5L8 10l4-3Z" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
    </>
  ),
  hd: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M7 9v6M7 12h3M10 9v6M14 9v6h1.5a2.5 2.5 0 0 0 0-6H14Z" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </>
  ),
  wave: <path d="M2 12c2.5-5 5-5 7.5 0S14.5 17 17 12s3.5-5 5 0" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
    </>
  ),
  check: <path d="M4 12.5l5 5 11-11" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  // WhatsApp-Markenglyphe (Font-Awesome-Brands-Stil), viewBox 0 0 448 512
  whatsapp: (
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 439.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.5-186.6 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.1-41.3-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  star: <path d="M12 3.5l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 17.3 6.7 20l1.1-6L3.4 9.9l6-.8L12 3.5Z" />,
  send: <path d="M21.5 3.5 2.5 11l7 2.6M21.5 3.5 14 21.5l-4.5-7.9M21.5 3.5 9.5 13.6" />,
  quote: (
    <path d="M9 7c-2.8 1-4 3-4 6.5V19h6v-6H7.5c0-1.8.8-3 2.5-3.6L9 7Zm10 0c-2.8 1-4 3-4 6.5V19h6v-6h-3.5c0-1.8.8-3 2.5-3.6L19 7Z" />
  ),
  play: <path d="M8 5v14l11-7L8 5Z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 5.2A3 3 0 0 1 16 11M17.5 19c0-2.6-1.4-4.4-3.4-5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="7" rx="1.6" />
      <rect x="17" y="13" width="4" height="7" rx="1.6" />
      <path d="M20 20a4 4 0 0 1-4 4h-2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4-4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2.1 2.1M16.9 16.9 19 19M19 5l-2.1 2.1M7.1 16.9 5 19" />
    </>
  ),
  face: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01M15 10h.01M8.5 14.5a4.5 4.5 0 0 0 7 0" />
    </>
  ),
  // Telegram-Markenglyphe (Font-Awesome-Brands-Stil), viewBox 0 0 496 512
  telegram: (
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
  ),
};

/** Icons mit eigener viewBox (Markenglyphen im Font-Awesome-Format). */
const viewBoxes: Partial<Record<IconName, string>> = {
  whatsapp: "0 0 448 512",
  telegram: "0 0 496 512",
};

const strokeIcons = new Set<IconName>([
  "bolt", "devices", "calendar", "chat", "tv", "rocket", "stick", "box",
  "phone", "tablet", "desktop", "live", "ball", "film", "hd", "grid", "wave",
  "globe", "check", "arrow", "menu", "close", "mail", "plus", "minus", "send",
  "users", "headset", "search", "gear", "face",
]);

type Props = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export function Icon({ name, size = 24, className, ...rest }: Props) {
  const isStroke = strokeIcons.has(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBoxes[name] ?? "0 0 24 24"}
      fill={isStroke ? "none" : "currentColor"}
      stroke={isStroke ? "currentColor" : "none"}
      strokeWidth={isStroke ? 1.6 : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
