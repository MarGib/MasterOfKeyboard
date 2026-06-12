# Master of Keyboard

Interaktywna aplikacja wspomagająca naukę pisania bezwzrokowego.

## Funkcje

- prowadzony samouczek prawidłowego ułożenia dłoni i palców,
- lekcje pisania od rzędu bazowego do pełnych fraz,
- podświetlana klawiatura ekranowa i wskazanie właściwego palca,
- adaptacyjna gra Deszcz liter,
- test szybkości z pomiarem WPM, CPM i dokładności,
- zapisywanie postępów w przeglądarce,
- motywy Noc, Zmierzch, Jasny i Neon.

## Uruchomienie lokalne

Aplikacja nie wymaga instalowania zależności. Wystarczy otworzyć
`MasterOfKeyboard/index.html` albo uruchomić prosty serwer HTTP:

```bash
python3 -m http.server 4173 --directory MasterOfKeyboard
```

Następnie otwórz `http://localhost:4173`.

## GitHub Pages

Publikacja GitHub Pages odbywa się automatycznie po każdym pushu do gałęzi
`main`.
