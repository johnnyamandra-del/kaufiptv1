HERO-BILD EINSETZEN
===================

Das Hero-Foto (Familie auf dem Sofa) ist NICHT im Repo enthalten.
So bindest du es ein:

1. Speichere das Foto als:
       public/hero-family.jpg

   Empfehlung:
   - Breite ca. 2000-2400 px, Querformat (3:2)
   - Motiv rechts im Bild, links dunkle Flaeche
   - als .jpg (Qualitaet ~80), optional zusaetzlich .webp
   - Dateigroesse moeglichst < 350 KB

2. Fertig. Die Startseite nutzt automatisch /hero-family.jpg
   (rechte Spalte am Desktop, unteres Visual auf Mobile).

Anderer Dateiname/Pfad?
   -> lib/content.ts  ->  hero.image  anpassen.

Solange die Datei fehlt:
   Es greift ein reiner CSS-Fallback (schwarze Flaeche, #05070A).
   Der Hero bleibt nutzbar, nur ohne Foto.

Optimierung (optional, empfohlen):
   Fuer bessere Ladezeiten auf next/image umstellen:
   - components/Hero.tsx  ->  <HeroImage> durch <Image ... fill priority> ersetzen
   - https://nextjs.org/docs/app/api-reference/components/image
