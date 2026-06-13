# Master of Keyboard

Interaktywna aplikacja wspomagająca naukę pisania bezwzrokowego.

## Funkcje

- prowadzony samouczek prawidłowego ułożenia dłoni i palców,
- lekcje pisania od rzędu bazowego do pełnych fraz,
- podświetlana klawiatura ekranowa i wskazanie właściwego palca,
- salon ośmiu gier: Deszcz liter, Baloniki liter, Wyścig słów,
  Budowniczy słów, Pamięć palców, Polskie znaki, Rytm klawiatury
  i Mistrzowski maraton,
- test szybkości z pomiarem WPM, CPM i dokładności,
- wersjonowany zapis pełnej historii treningów w przeglądarce,
- wiarygodne statystyki WPM, dokładności, poprawek i czasu treningu,
- prawdziwa seria dni oraz konfigurowalny dzienny cel,
- profil treningowy uwzględniający Windows, macOS lub Linux,
- sześć motywów: Noc, Zmierzch, Neon, Jasny, Krem i Niebo.

## Publiczna wersja

Aplikacja jest dostępna pod adresem:
[https://margib.github.io/MasterOfKeyboard/](https://margib.github.io/MasterOfKeyboard/).

Widoczny w aplikacji licznik jest przybliżony. Zwiększa się tylko raz w danej
przeglądarce na publicznej stronie dzięki znacznikowi w `localStorage`, bez
fingerprintingu i zbierania danych osobowych.

## Uruchomienie lokalne

Aplikacja nie wymaga instalowania zależności. Wystarczy otworzyć
`MasterOfKeyboard/index.html` albo uruchomić prosty serwer HTTP:

```bash
python3 -m http.server 4173 --directory MasterOfKeyboard
```

Następnie otwórz `http://localhost:4173`.

## Testy

Statystyki, migracja danych i serie dni mają testy automatyczne:

```bash
npm test
```

## GitHub Pages

Publikacja GitHub Pages odbywa się automatycznie po każdym pushu do gałęzi
`main`.
