import { WhatsAppButton } from "./WhatsAppButton";
import { TelegramButton } from "./TelegramButton";

/**
 * Fest positionierte Kontakt-Buttons unten rechts (global auf allen Seiten).
 * WhatsApp oben, Telegram darunter.
 */
export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3.5 sm:gap-4 print:hidden">
      <WhatsAppButton />
      <TelegramButton />
    </div>
  );
}
