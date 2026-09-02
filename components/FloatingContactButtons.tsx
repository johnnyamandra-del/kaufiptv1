"use client";

import { usePathname } from "next/navigation";
import { WhatsAppButton } from "./WhatsAppButton";
import { TelegramButton } from "./TelegramButton";

/**
 * Fest positionierte Kontakt-Buttons unten rechts (global auf allen Seiten).
 * WhatsApp oben, Telegram darunter.
 *
 * Ausnahme: Auf /installation werden sie ausgeblendet – dort gibt es einen
 * eigenen Support-Bereich mit WhatsApp-/Telegram-Buttons, und die schwebenden
 * Buttons würden auf schmalen Screens die Inhalte überlagern.
 */
export function FloatingContactButtons() {
  const pathname = usePathname();
  if (pathname === "/installation") return null;

  return (
    <div className="floating-contacts fixed bottom-6 right-4 z-[1000] flex flex-col items-center gap-3.5 sm:right-6 sm:gap-4 print:hidden">
      <WhatsAppButton />
      <TelegramButton />
    </div>
  );
}
