# Kevin Mok developer website

Published at https://mightyjuke.github.io/ through GitHub Pages, from `main` at the repository root. No build dependencies. Stairs Rush Reloaded uses a small progressively enhanced realm selector; all content is available without JavaScript.

- Homepage: https://mightyjuke.github.io/
- Compute Tycoon: https://mightyjuke.github.io/data-center-typhoon-public/ (published by its own repository)
- Squadstorm: https://mightyjuke.github.io/squadstorm/
- Stairs Rush Reloaded: https://mightyjuke.github.io/stairrushreloaded/
- Stairs Rush Reloaded privacy policy: https://mightyjuke.github.io/stairrushreloaded/privacy.html
- Squadstorm privacy policy: https://mightyjuke.github.io/squadstorm/privacy.html
- AdMob seller record: https://mightyjuke.github.io/app-ads.txt

## Squadstorm

The game source stays in the private `mightyjuke/red-blue-man` repository. Only selected public artwork, gameplay images, a font, and website content are copied here. No game builds or private configuration are published.

Website imagery comes from `red-blue-man/assets/store/feature_1024x500.png`, `assets/store/icon_192.png`, and `docs/store/google_play_phone/{01_gates,04_boss,06_night}.jpg`. WebP copies are resized mechanically; screenshots retain their store captions. Barlow Condensed is copied from the game's fonts with its SIL Open Font License.

The privacy disclosures come from `red-blue-man/docs/privacy.html`, updated 7 October 2026 for banner ads and platform cloud saves, with Kevin Mok's existing public contact email. Keep them synchronized when game data handling changes.

Use the Squadstorm landing page for the store developer/marketing website and the privacy policy URL for the stores and AdMob Privacy & messaging. Both games use publisher `pub-8508559458904206`, already present in the hostname-root `app-ads.txt`. AdMob verification additionally requires linked public store listings and a successful crawl; publishing a privacy policy does not configure or publish UMP messages.

## Preview

Run `python3 -m http.server 4174` in this repository, then visit http://localhost:4174/squadstorm/.

## Stairs Rush Reloaded

The landing page and policy describe version **1.3.5 (47)**. The live App Store currently offers an earlier release; the download section states that the remaster and Android are in testing. Update that availability text when the release becomes public.

The game remains in `mightyjuke/stairrushreloaded`. Only selected artwork, mechanically cropped pilot sprites, licensed fonts, and screenshots are copied here. No game packages, native plugins, signing material, or game source are published.

The five gameplay images were rendered from unmodified Android build 47 resources at 1080×1920 with the existing input-only listing driver (seed7, isolated saves), then resized to 540×960 WebP. They are desktop Godot renders with phone viewport metrics, not physical-device captures. The original compiled resource archive SHA-256 is `a9254086dd71515a6a99138bbd3a7a141c5329c1dac58dda9b9ddba9150db53d`. All 457 resource members remained byte-identical. The approved campaign artwork, icon, and first idle tile of each pilot match build 47. Each shipped raster carries source provenance in embedded metadata or a matching sidecar. Pixelify Sans and Barlow carry their bundled SIL Open Font Licenses.

The policy distinguishes offline Android build 47 (no internet permission, no ads/billing, cloud backup disabled) from iOS AdMob, consent, StoreKit and Game Center behavior. It covers local saves, support email, third-party privacy controls, and GitHub Pages hosting. It does not promise that historical Android versions collected no data. Keep it synchronized with future app changes.

Preview with `python3 -m http.server 4175`, then open `/stairrushreloaded/` and `/stairrushreloaded/privacy.html`. No build step is required. The root `app-ads.txt` is preserved.
