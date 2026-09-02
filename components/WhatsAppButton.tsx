import { Icon } from "./Icon";
import { site } from "@/lib/content";

/** Runder, schwebender WhatsApp-Kontaktbutton. URL: site.whatsappUrl. */
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat per WhatsApp öffnen"
      title="WhatsApp"
      className="grid h-[60px] w-[60px] place-items-center rounded-full bg-whatsapp text-white shadow-[0_10px_28px_-6px_rgba(37,211,102,0.7)] ring-1 ring-white/15 transition-[transform,background-color] duration-200 ease-out hover:scale-110 hover:bg-whatsapp-deep focus-visible:scale-110 active:scale-95 sm:h-16 sm:w-16"
    >
      <Icon name="whatsapp" size={34} className="h-[30px] w-[30px] sm:h-[34px] sm:w-[34px]" />
    </a>
  );
}
