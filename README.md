# Kevin Mok developer website

Published at https://mightyjuke.github.io/ through GitHub Pages, from `main` at the repository root. No build dependencies or JavaScript.

- Homepage: https://mightyjuke.github.io/
- Compute Tycoon: https://mightyjuke.github.io/data-center-typhoon-public/ (published by its own repository)
- Squadstorm: https://mightyjuke.github.io/squadstorm/
- Squadstorm privacy policy: https://mightyjuke.github.io/squadstorm/privacy.html
- AdMob seller record: https://mightyjuke.github.io/app-ads.txt

## Squadstorm

The game source stays in the private `mightyjuke/red-blue-man` repository. Only selected public artwork, gameplay images, a font, and website content are copied here. No game builds or private configuration are published.

Website imagery comes from `red-blue-man/assets/store/feature_1024x500.png`, `assets/store/icon_192.png`, and `docs/store/google_play_phone/{01_gates,04_boss,06_night}.jpg`. WebP copies are resized mechanically; screenshots retain their store captions. Barlow Condensed is copied from the game's fonts with its SIL Open Font License.

The privacy disclosures come from `red-blue-man/docs/privacy.html`, dated 1 October 2026, with Kevin Mok's existing public contact email. Keep them synchronized when game data handling changes.

Use the Squadstorm landing page for the store developer/marketing website and the privacy policy URL for the stores and AdMob Privacy & messaging. Both games use publisher `pub-8508559458904206`, already present in the hostname-root `app-ads.txt`. AdMob verification additionally requires linked public store listings and a successful crawl; publishing a privacy policy does not configure or publish UMP messages.

## Preview

Run `python3 -m http.server 4174` in this repository, then visit http://localhost:4174/squadstorm/.
