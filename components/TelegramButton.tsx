import { Icon } from "./Icon";
import { site } from "@/lib/content";

/** Runder, schwebender Telegram-Kontaktbutton. URL: site.telegramUrl. */
export function TelegramButton() {
  return (
    <a
      href={site.telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat per Telegram öffnen"
      title="Telegram"
      className="grid h-[60px] w-[60px] place-items-center rounded-full bg-[#229ED9] text-white shadow-[0_10px_28px_-6px_rgba(34,158,217,0.7)] ring-1 ring-white/15 transition-transform duration-200 ease-out hover:scale-110 focus-visible:scale-110 active:scale-95 sm:h-16 sm:w-16"
    >
      <Icon name="telegram" size={34} className="h-[30px] w-[30px] sm:h-[34px] sm:w-[34px]" />
    </a>
  );
}
