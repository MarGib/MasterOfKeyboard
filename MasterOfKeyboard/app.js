const Core = window.MOKCore;

const lessons = [
  { title: "Rząd podstawowy", subtitle: "Zacznij spokojnie. Palce wracają na klawisze bazowe.", label: "ASDF JKL", text: "asdf jkl; asdf jkl; sad fall ask dad; flask salad; jak las; sad jak las" },
  { title: "Lewa ręka", subtitle: "Budujemy precyzję lewej dłoni bez spoglądania w dół.", label: "LEWA", text: "asdf fdsa sad fad das; rasa data; tata stara; teraz fraza staje sie latwa" },
  { title: "Prawa ręka", subtitle: "Ćwicz lekki, regularny ruch prawej dłoni.", label: "PRAWA", text: "jkl; ;lkj; lok kij; pol kojo; plik; kilo; lilia; poluj jak ninja" },
  { title: "Górny rząd", subtitle: "Sięgaj do góry i zawsze wracaj na F oraz J.", label: "QWERTY", text: "qwer tyui op; rower; rytm; typowy; jutro kupujemy nowy projektor" },
  { title: "Dolny rząd", subtitle: "Rozluźnij dłonie i sięgaj palcami w dół.", label: "ZXCVB", text: "zxcv bnm; znak; zabawa; moc; czas; zaczynam bardzo mocny trening" },
  { title: "Pełne słowa", subtitle: "Łączymy wszystkie rzędy w płynne, naturalne zdania.", label: "SŁOWA", text: "Płynne pisanie zaczyna się od dokładności. Spokojne tempo daje najlepsze efekty." },
  { title: "Polskie znaki", subtitle: "Trenuj znaki diakrytyczne oraz rytm całych zdań.", label: "ĄĆĘŁŃ", text: "Zażółć gęślą jaźń. Późną jesienią liście wirują nad łąką." },
  { title: "Mistrzowski rytm", subtitle: "Dłuższy tekst sprawdzi wytrzymałość i koncentrację.", label: "FINAŁ", text: "Każdego dnia piszę odrobinę szybciej, ale dokładność zawsze pozostaje moim najważniejszym celem." }
];

const tutorialStages = [
  { group: "Fundament", title: "Znajdź pozycję bazową", description: "Połóż palce na ASDF i JKL;. Wypukłe znaczniki F oraz J pomogą zrobić to bez patrzenia.", instruction: "Naciśnij losową sekwencję klawiszy bazowych właściwymi palcami.", posture: "Palce lekko zgięte, nadgarstki proste", postureCopy: "Nie opieraj ciężaru dłoni o biurko. Każdy palec pozostaje blisko swojego klawisza.", text: "f j d k s l a ; f j", minAccuracy: 90 },
  { group: "Lewa dłoń", title: "Lewy mały palec", description: "Mały palec lewej dłoni odpowiada za A oraz sięganie do Q i Z.", instruction: "Poruszaj tylko małym palcem. Pozostałe palce zostają na bazie.", posture: "Mały palec pracuje, dłoń pozostaje spokojna", postureCopy: "Po każdym Q lub Z natychmiast wracaj małym palcem na A.", text: "a a q a z a a q z a", minAccuracy: 90 },
  { group: "Lewa dłoń", title: "Lewy serdeczny", description: "Serdeczny palec spoczywa na S i porusza się pionowo do W oraz X.", instruction: "Naciskaj S, W i X bez przesuwania całej dłoni.", posture: "Ruch w górę i dół jednej kolumny", postureCopy: "Nadgarstek zostaje nieruchomy, a serdeczny palec wraca na S.", text: "s w s x s s w x s w", minAccuracy: 90 },
  { group: "Lewa dłoń", title: "Lewy środkowy", description: "Środkowy palec prowadzi kolumnę D, E i C.", instruction: "Sięgaj do E i C, zawsze wracając na D.", posture: "Środkowy palec prowadzi prostą linię", postureCopy: "Nie unoś dłoni. Wystarczy lekki ruch środkowego palca.", text: "d e d c d e c d d e", minAccuracy: 92 },
  { group: "Lewa dłoń", title: "Lewy wskazujący", description: "Wskazujący obsługuje dwie kolumny: F/R/V oraz G/T/B.", instruction: "Ćwicz ruch po przekątnej i odnajduj bazowe F bez patrzenia.", posture: "Wskazujący ma największy obszar lewej dłoni", postureCopy: "Po G, T lub B wracaj na F i wyczuj wypukły znacznik.", text: "f r f v f g t b g f r v", minAccuracy: 92 },
  { group: "Prawa dłoń", title: "Prawy wskazujący", description: "Prawy wskazujący pracuje na J/U/M oraz H/Y/N.", instruction: "Po każdym sięgnięciu odnajdź wypukły znacznik na J.", posture: "J jest kotwicą prawej dłoni", postureCopy: "Poruszaj palcem, nie całą ręką. Pozostałe palce zostają na K, L i ;.", text: "j u j m j h y n h j u m", minAccuracy: 92 },
  { group: "Prawa dłoń", title: "Prawa dłoń i mały palec", description: "Poznaj kolumny K/I/, oraz L/O/. i ;/P/.", instruction: "Ćwicz trzy zewnętrzne palce prawej dłoni.", posture: "Prawa dłoń pozostaje oparta na JKL;", postureCopy: "Mały palec wykonuje najdłuższe ruchy, więc pracuj spokojnie.", text: "k i k , l o l . ; p ; / k l ;", minAccuracy: 92 },
  { group: "Ruch dłoni", title: "Sięganie do górnego rzędu", description: "Teraz wszystkie palce sięgają w górę, ale dłonie zawsze wracają na bazę.", instruction: "Po każdej literze z górnego rzędu wróć na klawisz bazowy.", posture: "Baza jest punktem powrotu", postureCopy: "Nie przesuwaj nadgarstków do przodu. Wydłużaj tylko palce.", text: "f r j u d e k i s w l o a q ; p", minAccuracy: 93 },
  { group: "Ruch dłoni", title: "Sięganie do dolnego rzędu", description: "Palce schodzą do Z–M i natychmiast wracają do pozycji bazowej.", instruction: "Wykonuj małe ruchy w dół bez opuszczania nadgarstków.", posture: "Lekki ruch palców w stronę dolnego rzędu", postureCopy: "Kciuki pozostają nad spacją, a dłonie nie obracają się.", text: "a z s x d c f v j m k , l . ; /", minAccuracy: 93 },
  { group: "Koordynacja", title: "Powrót do F i J", description: "Nauczymy obie dłonie wracać do swoich kotwic po każdym ruchu.", instruction: "Wyczuwaj F i J, a następnie naciskaj wskazywany klawisz.", posture: "F i J ustawiają całą klawiaturę", postureCopy: "Gdy zgubisz pozycję, znajdź wypukłe znaczniki bez patrzenia.", text: "f r f v f t f b j u j m j y j n", minAccuracy: 94 },
  { group: "Pierwsze słowa", title: "Krótkie słowa", description: "Łączymy pracę palców w krótkie słowa z rzędu bazowego i sąsiednich klawiszy.", instruction: "Pisz spokojnie i pozwól każdemu palcowi wracać na miejsce.", posture: "Dłonie spokojne, palce pracują niezależnie", postureCopy: "Po każdym słowie rozluźnij palce i sprawdź pozycję bazową.", text: "sad jak las fala data klasa", minAccuracy: 94 },
  { group: "Pierwsze frazy", title: "Płynne zdanie", description: "Ostatni etap łączy wszystkie ruchy w naturalną, prostą frazę.", instruction: "Zachowaj rytm i dokładność. Nie przyspieszaj na siłę.", posture: "Patrz na ekran i ufaj pamięci palców", postureCopy: "Płynność pojawia się wtedy, gdy dłonie są rozluźnione.", text: "Moje palce wracają na swoje miejsce.", minAccuracy: 95 }
];

const tutorialTips = [
  { label: "NAJWAŻNIEJSZE", title: "Wyczuj wypustki na F i J", copy: "To punkty orientacyjne. Pozwalają znaleźć pozycję bazową bez patrzenia na klawiaturę.", kind: "bumps" },
  { label: "UWAŻAJ", title: "Nie przesuwaj całej lewej dłoni", copy: "Do Q i Z sięga wyłącznie mały palec. Pozostałe palce czekają blisko ASDF.", kind: "warning" },
  { label: "RUCH PIONOWY", title: "W, S i X tworzą jedną kolumnę", copy: "Poruszaj serdecznym palcem prosto w górę lub w dół i zawsze wracaj na S.", kind: "column" },
  { label: "RUCH PIONOWY", title: "E, D i C należą do jednego palca", copy: "Środkowy palec pracuje sam. Nie unoś pozostałych palców z rzędu bazowego.", kind: "column" },
  { label: "DWA OBSZARY", title: "Wskazujący obsługuje dwie kolumny", copy: "Lewy wskazujący sięga także do G, T i B, ale jego punktem powrotu pozostaje F.", kind: "reach" },
  { label: "PUNKT POWROTU", title: "Po każdym ruchu odnajdź J", copy: "Prawy wskazujący wraca na wypustkę J po naciśnięciu H, U, Y, N lub M.", kind: "bumps" },
  { label: "UWAŻAJ", title: "Mały palec prawej dłoni ma daleki zasięg", copy: "Do P i znaków sięgaj spokojnie. Nie obracaj dłoni i nie odrywaj jej od JKL;.", kind: "warning" },
  { label: "GÓRNY RZĄD", title: "Wydłuż palce, nie przesuwaj nadgarstków", copy: "Po naciśnięciu górnego klawisza natychmiast wróć palcem na rząd bazowy.", kind: "reach" },
  { label: "DOLNY RZĄD", title: "Nie opuszczaj nadgarstków", copy: "Do Z–M sięgaj lekkim ruchem palca w dół. Kciuki pozostają nad spacją.", kind: "reach" },
  { label: "ZGUBIONA POZYCJA?", title: "Nie patrz w dół — znajdź F i J", copy: "Wypustki przywrócą całe ułożenie dłoni szybciej niż szukanie klawiszy wzrokiem.", kind: "bumps" },
  { label: "RYTM", title: "Nie ścigaj się z własnymi palcami", copy: "Najpierw pisz dokładnie. Szybkość przyjdzie sama, gdy ruchy staną się pewne.", kind: "rhythm" },
  { label: "PŁYNNOŚĆ", title: "Spację naciskaj kciukiem", copy: "Po każdym słowie rozluźnij dłonie, ale palce pozostaw blisko pozycji bazowej.", kind: "rhythm" }
];

const interfaceTourSteps = [
  { view: "practice", selector: ".main-nav", kicker: "NAWIGACJA", title: "Twoja mapa treningu", copy: "Z tego menu przejdziesz do samouczka, lekcji, gier, testu szybkości i raportu postępów." },
  { view: "practice", selector: "#practice-view .lesson-track", kicker: "LEKCJE", title: "Uczysz się krok po kroku", copy: "Każdy etap dodaje nowe klawisze. Możesz wrócić do wcześniejszej lekcji i poprawić dokładność." },
  { view: "practice", selector: "#practice-view .typing-card", kicker: "ĆWICZENIE", title: "Patrz na tekst, nie na dłonie", copy: "Aktualny znak jest wyraźnie zaznaczony. Pisz spokojnie, a aplikacja policzy tempo, dokładność i serię." },
  { view: "practice", selector: "#practice-view .coach-grid", kicker: "PODPOWIEDŹ DŁONI", title: "Wiesz, którego palca użyć", copy: "Podświetlona dłoń i palec pokazują właściwy ruch dla następnego znaku." },
  { view: "practice", selector: "#practice-view .keyboard-wrap", kicker: "KLAWIATURA EKRANOWA", title: "Klawisz prowadzi Cię kolorem", copy: "Następny klawisz pulsuje, a każdy kolor odpowiada innemu palcowi. Z czasem przestaniesz potrzebować tej podpowiedzi." },
  { view: "tutorial", selector: "#tutorial-view .tutorial-guide", kicker: "SAMOUCZEK", title: "Najpierw zbuduj dobrą technikę", copy: "Samouczek prowadzi od ułożenia dłoni przez pojedyncze palce aż do pełnych zdań." },
  { view: "game", selector: "#game-view .game-library", kicker: "SALON GIER", title: "Refleks też może uczyć", copy: "Gry utrwalają położenie klawiszy, rytm, polskie znaki i pamięć palców bez monotonii." },
  { view: "speed", selector: "#speed-view .speed-layout", kicker: "TEST SZYBKOŚCI", title: "Sprawdzaj postęp, nie ścigaj się", copy: "Test mierzy WPM, liczbę znaków i dokładność. Najpierw celuj w jakość, potem w tempo." },
  { view: "progress", selector: "#progress-view .progress-hero", kicker: "POSTĘPY", title: "Każdy trening zostawia ślad", copy: "Tu znajdziesz poziom, rekordy, historię sesji i mapę klawiszy, które wymagają więcej ćwiczeń." },
  { view: "practice", selector: ".guide-menu", kicker: "WRÓĆ W DOWOLNEJ CHWILI", title: "Dwa osobne przewodniki", copy: "Oprowadzanie przypomina funkcje aplikacji, a „Jak pisać?” pokazuje dokładną technikę dłoni i plan codziennego treningu." }
];

const techniqueSlides = [
  { kicker: "POZYCJA BAZOWA", title: "Znajdź F i J bez patrzenia", copy: "Wypustki na klawiszach F i J są punktami orientacyjnymi całej klawiatury.", bullets: ["Lewy wskazujący połóż na F, prawy na J.", "Pozostałe palce układają się na ASDF oraz JKL;.", "Nadgarstki trzymaj prosto, a palce lekko zgięte."], visual: "home" },
  { kicker: "MAPA PALCÓW", title: "Każdy palec ma swój obszar", copy: "Nie szukaj liter całą dłonią. Każdy palec porusza się w swoim pionowym pasie.", bullets: ["Wskazujące obsługują po dwie kolumny.", "Małe palce sięgają także do zewnętrznych klawiszy.", "Po każdym ruchu wracaj na rząd bazowy."], visual: "fingers" },
  { kicker: "RUCH MIĘDZY RZĘDAMI", title: "Sięgaj palcem, nie nadgarstkiem", copy: "Do górnego i dolnego rzędu wykonuj mały ruch właściwego palca, pozostawiając dłoń spokojną.", bullets: ["Po górnym klawiszu wróć na bazę.", "Do dolnego rzędu sięgaj lekko w dół.", "Gdy zgubisz pozycję, odszukaj wypustki F i J."], visual: "rows" },
  { kicker: "SPACJA I FUNKCJE", title: "Kciuk pracuje, małe palce pomagają", copy: "Spację naciskaj wygodniejszym kciukiem. Klawisze funkcyjne zwykle należą do małych palców.", bullets: ["Shift naciska przeciwna ręka niż wpisywana litera.", "Enter, Backspace i prawy Shift obsługuje prawy mały palec.", "Tab, Caps Lock i lewy Shift obsługuje lewy mały palec."], visual: "functions" },
  { kicker: "BEZ PATRZENIA", title: "Zaufaj palcom i ekranowi", copy: "Pisanie bezwzrokowe powstaje z dokładnych powtórzeń, a nie z szybkiego zgadywania.", bullets: ["Patrz na znak oraz podświetlenie na ekranie.", "Możesz na chwilę zasłonić fizyczną klawiaturę.", "Po błędzie zwolnij, popraw pozycję i wróć do rytmu."], visual: "eyes" },
  { kicker: "ŚCIEŻKA NAUKI", title: "Lekcje stopniowo zdejmują podpórki", copy: "Aplikacja najpierw prowadzi każdy palec, potem łączy ruchy w słowa, zdania i naturalne tempo.", bullets: ["Samouczek uczy techniki pojedynczych palców.", "Lekcje utrwalają rzędy i całe słowa.", "Gry oraz test szybkości sprawdzają odruchy."], visual: "path" },
  { kicker: "CODZIENNY PLAN", title: "Dziesięć minut wystarczy", copy: "Krótki, regularny trening daje pamięci mięśniowej więcej niż rzadka, długa sesja.", bullets: ["2 minuty: pozycja dłoni i spokojna rozgrzewka.", "5 minut: jedna lekcja z naciskiem na dokładność.", "2 minuty: wybrana gra, 1 minuta: test szybkości."], visual: "plan" },
  { kicker: "POWÓD DO POWROTU", title: "Zbieraj iskry i buduj serię", copy: "Każdy wpisany znak, ukończony etap i rozegrana sesja powiększają Twój wynik treningowy.", bullets: ["Iskry nagradzają rzeczywistą praktykę.", "Dzienny cel przypomina o krótkiej sesji.", "Poziomy i mapa klawiszy pokazują długofalowy rozwój."], visual: "rewards" }
];

const speedTexts = [
  "Dobra technika pisania pozwala skupić się na pomysłach zamiast na szukaniu liter. Spokojny rytm i regularny oddech pomagają utrzymać dokładność przez długi czas.",
  "Najlepsze rezultaty pojawiają się dzięki krótkim, regularnym treningom. Palce uczą się drogi do klawiszy, a z czasem każdy ruch staje się naturalny i lekki.",
  "Kiedy wzrok pozostaje na ekranie, łatwiej zauważyć błąd i zachować tok myślenia. To właśnie dlatego pisanie bezwzrokowe daje tak dużo swobody."
];

const rows = [
  [["`","Backquote"],["1","Digit1"],["2","Digit2"],["3","Digit3"],["4","Digit4"],["5","Digit5"],["6","Digit6"],["7","Digit7"],["8","Digit8"],["9","Digit9"],["0","Digit0"],["-","Minus"],["=","Equal"],["Backspace","Backspace","key-backspace"]],
  [["Tab","Tab","key-tab"],["Q","KeyQ"],["W","KeyW"],["E","KeyE"],["R","KeyR"],["T","KeyT"],["Y","KeyY"],["U","KeyU"],["I","KeyI"],["O","KeyO"],["P","KeyP"],["[","BracketLeft"],["]","BracketRight"],["\\","Backslash"]],
  [["Caps","CapsLock","key-caps"],["A","KeyA","home"],["S","KeyS"],["D","KeyD"],["F","KeyF","home"],["G","KeyG"],["H","KeyH"],["J","KeyJ","home"],["K","KeyK"],["L","KeyL"],[";","Semicolon"],["'","Quote"],["Enter","Enter","key-enter"]],
  [["Shift","ShiftLeft","key-shift"],["Z","KeyZ"],["X","KeyX"],["C","KeyC"],["V","KeyV"],["B","KeyB"],["N","KeyN"],["M","KeyM"],[",","Comma"],[".","Period"],["/","Slash"],["Shift","ShiftRight","key-shift"]],
  [["Spacja","Space","key-space"]]
];

const fingerGroups = [
  { name: "Lewy mały", color: "#ff7a68", keys: "`1qaz" },
  { name: "Lewy serdeczny", color: "#f5c96a", keys: "2wsx" },
  { name: "Lewy środkowy", color: "#62dbb5", keys: "3edc" },
  { name: "Palce wskazujące", color: "#64b5f6", keys: "45rtfgvb67yuhjnm" },
  { name: "Prawy środkowy", color: "#9d91ff", keys: "8ik," },
  { name: "Prawy serdeczny", color: "#ff91c8", keys: "9ol." },
  { name: "Prawy mały", color: "#ff9f68", keys: "0p;/'-=[]\\" },
  { name: "Kciuki", color: "#b5bdcf", keys: " " }
];

const keyToCode = {
  " ": "Space", ";": "Semicolon", "'": "Quote", ",": "Comma", ".": "Period", "/": "Slash",
  "[": "BracketLeft", "]": "BracketRight", "\\": "Backslash", "-": "Minus", "=": "Equal", "`": "Backquote"
};

const goalDetails = {
  start: { title: "Pewność na całej klawiaturze", guidance: "Najpierw utrwal pozycję bazową i dokładne ruchy pojedynczych palców." },
  accuracy: { title: "Mniej błędów, więcej pewności", guidance: "Skupiaj się na spokojnym rytmie. Rekord liczy się dopiero od 85% dokładności." },
  speed: { title: "Szybsze, ale nadal dokładne pisanie", guidance: "Kwalifikowany rekord pochodzi z testu szybkości i wymaga co najmniej 85% dokładności." },
  work: { title: "Sprawniejsze pisanie w pracy", guidance: "Ćwicz pełne słowa, naturalne zdania oraz znaki używane w codziennych dokumentach." },
  programming: { title: "Płynniejsze pisanie kodu", guidance: "Profil zapisany. Kolejne etapy rozbudują trening cyfr, symboli i skrótów." }
};
const platformDetails = {
  windows: "Windows: polskie znaki wpisuj prawym Alt (AltGr) wraz z literą.",
  macos: "macOS: polskie znaki wpisuj klawiszem Option wraz z odpowiednim skrótem.",
  linux: "Linux: polskie znaki najczęściej wpisuj prawym Alt (AltGr) wraz z literą."
};

let progress = loadProgress();
let activeView = "practice";
let currentLesson = Math.min(progress.completed.length, lessons.length - 1);
let practice = freshSession(lessons[currentLesson].text);
let tutorialIndex = Math.min(progress.tutorialCompleted.length, tutorialStages.length - 1);
let tutorial = freshTutorialSession(tutorialStages[tutorialIndex].text);
let speed = freshSession(speedTexts[0]);
let speedDuration = 30;
let speedTimer = null;
let activeGameMode = localStorage.getItem("mok-game-mode") || "rain";
let game = freshGameState(false);
let soundOn = localStorage.getItem("mok-sound") !== "off";
let audioContext;
let activeTheme = localStorage.getItem("mok-theme") || "dark";
let interfaceTourIndex = 0;
let interfaceTourOpen = false;
let interfaceTourReturnView = "practice";
let techniqueSlideIndex = 0;
let techniqueShowOpen = false;
const visitorCounterBaseUrl = "https://api.counterapi.dev/v1/master-of-keyboard/unique-users";
const visitorCountedKey = "mok-public-visitor-counted";
const interfaceTourSeenKey = "mok-interface-tour-seen";

function loadProgress() {
  try {
    const migrated = Core.migrateProgress(JSON.parse(localStorage.getItem("mok-progress") || "{}"));
    localStorage.setItem("mok-progress", JSON.stringify(migrated));
    return migrated;
  }
  catch { return Core.createDefaultProgress(); }
}

function saveProgress() {
  progress.version = Core.DATA_VERSION;
  progress.updatedAt = new Date().toISOString();
  progress.bestWpm = Core.summarizeSessions(progress.sessions).bestWpm;
  localStorage.setItem("mok-progress", JSON.stringify(progress));
  updateDaily();
  updateRewards();
}

function freshSession(text) {
  return { text, index: 0, typed: [], errors: 0, correct: 0, attempts: 0, correctKeystrokes: 0, incorrectKeystrokes: 0, corrections: 0, streak: 0, bestStreak: 0, started: 0, ended: false };
}

function freshTutorialSession(text) {
  return { text, index: 0, typed: [], attempts: 0, errors: 0, correct: 0, started: 0, ended: false };
}

function init() {
  applyTheme(activeTheme);
  updateSoundControl();
  buildKeyboards();
  buildLessonTrack();
  buildLegend();
  renderGameLibrary();
  selectGameMode(activeGameMode, false);
  renderPractice();
  renderTutorial();
  resetSpeed();
  renderProgress();
  bindEvents();
  updateDaily();
  updateRewards();
  renderProfile();
  loadVisitorCount();
  syncActiveGuidance();
  document.getElementById("practice-text").focus();
  if (!progress.profile.configured) {
    setTimeout(openProfileModal, 350);
  } else if (localStorage.getItem(interfaceTourSeenKey) !== "yes" || new URLSearchParams(location.search).has("intro")) {
    setTimeout(() => startInterfaceTour(), 550);
  }
}

function buildKeyboards() {
  document.querySelectorAll("[data-keyboard]").forEach(board => {
    board.innerHTML = rows.map(row => `<div class="key-row">${row.map(([label, code, cls = ""]) => {
      const color = fingerFor(label.length === 1 ? label.toLowerCase() : label === "Spacja" ? " " : "").color;
      return `<span class="key ${cls}" data-code="${code}" data-color="${color}" style="--key-color:${color}"><span class="key-label">${label}</span></span>`;
    }).join("")}</div>`).join("");
  });
}

function buildLessonTrack() {
  document.getElementById("lesson-track").innerHTML = lessons.map((lesson, i) => `
    <div class="lesson-node ${i === currentLesson ? "active" : ""} ${progress.completed.includes(i) ? "done" : ""}" data-lesson="${i}">
      <span>${progress.completed.includes(i) ? "✓" : i + 1}</span><small>${lesson.label}</small>
    </div>`).join("");
}

function buildLegend() {
  document.getElementById("finger-legend").innerHTML = fingerGroups.slice(0, 4).map(group =>
    `<div class="legend-row"><span><i style="background:${group.color}"></i><b>${group.name}</b></span><span>${group.keys.toUpperCase()}</span></div>`
  ).join("");
}

function textMarkup(session) {
  let markup = "";
  let word = "";
  [...session.text].forEach((char, i) => {
    let cls = "char";
    if (i < session.index) cls += session.typed[i] === char ? " correct" : " wrong";
    if (i === session.index) cls += " current";
    const charMarkup = `<span class="${cls}${char === " " ? " space" : ""}">${char === " " ? " " : escapeHtml(char)}</span>`;
    if (char === " ") {
      if (word) markup += `<span class="word">${word}</span>`;
      markup += charMarkup;
      word = "";
    } else {
      word += charMarkup;
    }
  });
  return markup + (word ? `<span class="word">${word}</span>` : "");
}

function renderPractice() {
  const lesson = lessons[currentLesson];
  document.getElementById("lesson-title").textContent = lesson.title;
  document.getElementById("lesson-subtitle").textContent = lesson.subtitle;
  document.getElementById("practice-text").innerHTML = textMarkup(practice);
  const metrics = sessionMetrics(practice);
  setText("practice-wpm", metrics.wpm);
  setText("practice-cpm", metrics.cpm);
  setText("practice-accuracy", metrics.accuracy);
  setText("practice-streak", practice.streak);
  setText("practice-progress-copy", `${practice.index} / ${practice.text.length}`);
  document.getElementById("practice-progress").style.width = `${practice.index / practice.text.length * 100}%`;
  const next = practice.text[practice.index] || "✓";
  setText("next-key", next === " " ? "SPACJA" : next.toUpperCase());
  highlightExpected(next);
  highlightFinger(next);
}

function renderTutorial() {
  const stage = tutorialStages[tutorialIndex];
  setText("tutorial-stage-label", `ETAP ${tutorialIndex + 1} · ${stage.group}`);
  setText("tutorial-title", stage.title);
  setText("tutorial-description", stage.description);
  setText("tutorial-instruction-icon", String(tutorialIndex + 1).padStart(2, "0"));
  setText("tutorial-instruction", stage.instruction);
  setText("tutorial-posture-title", stage.posture);
  setText("tutorial-posture-copy", stage.postureCopy);
  const tip = tutorialTips[tutorialIndex];
  setText("tutorial-tip-label", tip.label);
  setText("tutorial-tip-title", tip.title);
  setText("tutorial-tip-copy", tip.copy);
  document.getElementById("tutorial-tip-banner").dataset.kind = tip.kind;
  setText("tutorial-total-count", tutorialStages.length);
  setText("tutorial-done-count", progress.tutorialCompleted.length);
  setText("tutorial-progress-copy", `${tutorial.index} / ${tutorial.text.length}`);
  const accuracy = tutorial.attempts ? Math.round(tutorial.correct / tutorial.attempts * 100) : 100;
  setText("tutorial-accuracy", accuracy);
  document.getElementById("tutorial-sequence").innerHTML = textMarkup(tutorial);
  const next = tutorial.text[tutorial.index] || "✓";
  const group = next === "✓" ? null : fingerFor(next.toLowerCase());
  setText("tutorial-next-key", next === " " ? "SPACJA" : next.toUpperCase());
  setText("tutorial-finger-name", group ? fingerNameFor(next) : "Etap ukończony");
  document.getElementById("tutorial-check").classList.toggle("good", tutorial.index > 0 && tutorial.errors === 0);
  document.getElementById("tutorial-feedback").textContent = tutorialFeedback(stage, accuracy);
  renderTutorialSteps();
  if (activeView === "tutorial") {
    highlightExpected(next === "✓" ? "" : next);
    highlightFinger(next === "✓" ? "" : next);
  }
}

function renderTutorialSteps() {
  document.getElementById("tutorial-steps").innerHTML = tutorialStages.map((stage, index) => `
    <button class="tutorial-step ${index === tutorialIndex ? "active" : ""} ${progress.tutorialCompleted.includes(index) ? "done" : ""}" data-tutorial-stage="${index}">
      <span>${progress.tutorialCompleted.includes(index) ? "✓" : index + 1}</span>
      <div><strong>${stage.title}</strong><small>${stage.group}</small></div>
    </button>`).join("");
}

function tutorialFeedback(stage, accuracy) {
  if (!tutorial.attempts) return `Wymagana dokładność: ${stage.minAccuracy}%. Zacznij od podświetlonego klawisza.`;
  if (tutorial.errors && accuracy < stage.minAccuracy) return `Zwolnij i wróć palcem na pozycję bazową. Dokładność: ${accuracy}%.`;
  if (tutorial.index > tutorial.text.length * .7) return "Świetnie. Utrzymaj spokojny rytm do końca.";
  return "Dobrze. Po każdym ruchu pozwól palcowi wrócić na swoje miejsce.";
}

function handleTutorial(event) {
  if (event.metaKey || event.ctrlKey || event.altKey || tutorial.ended || event.key.length !== 1) return;
  event.preventDefault();
  if (!tutorial.started) tutorial.started = Date.now();
  const expected = tutorial.text[tutorial.index];
  const correct = event.key === expected || event.key.toLowerCase() === expected.toLowerCase();
  tutorial.attempts++;
  setText("tutorial-pressed-key", event.key === " " ? "SPACJA" : event.key.toUpperCase());
  if (correct) {
    tutorial.correct++;
    tutorial.index++;
    tutorial.typed.push(expected);
    progress.keyHits[expected.toLowerCase()] = (progress.keyHits[expected.toLowerCase()] || 0) + 1;
    flashKey(event.code, true);
    feedbackSound("correct");
  } else {
    tutorial.errors++;
    progress.keyMisses[expected.toLowerCase()] = (progress.keyMisses[expected.toLowerCase()] || 0) + 1;
    flashKey(event.code, false);
    feedbackSound("wrong");
  }
  renderTutorial();
  if (tutorial.index >= tutorial.text.length) finishTutorialStage();
}

function finishTutorialStage() {
  const stage = tutorialStages[tutorialIndex];
  const accuracy = Math.round(tutorial.correct / tutorial.attempts * 100);
  if (accuracy < stage.minAccuracy) {
    setText("tutorial-feedback", `Osiągnięto ${accuracy}%, a potrzebujemy ${stage.minAccuracy}%. Za chwilę powtórzymy etap.`);
    setTimeout(() => selectTutorialStage(tutorialIndex), 1500);
    return;
  }
  tutorial.ended = true;
  if (!progress.tutorialCompleted.includes(tutorialIndex)) progress.tutorialCompleted.push(tutorialIndex);
  const durationSeconds = Math.max(1, Math.round((Date.now() - tutorial.started) / 1000));
  recordSession(Core.makeSessionRecord({
    kind: "tutorial",
    label: `Samouczek: ${stage.title}`,
    startedAt: new Date(tutorial.started).toISOString(),
    durationSeconds,
    typedChars: tutorial.attempts,
    correctChars: tutorial.correct,
    attempts: tutorial.attempts,
    errors: tutorial.errors,
    accuracy
  }), durationSeconds);
  saveProgress();
  renderTutorialSteps();
  setText("tutorial-done-count", progress.tutorialCompleted.length);
  setText("tutorial-complete-title", stage.title);
  setText("tutorial-complete-copy", tutorialIndex === tutorialStages.length - 1 ? "Znasz już fundamenty prawidłowego pisania bezwzrokowego." : `Dokładność ${accuracy}%. Możesz przejść do kolejnego ruchu.`);
  document.getElementById("next-tutorial-stage").textContent = tutorialIndex === tutorialStages.length - 1 ? "Powtórz kurs" : "Następny etap";
  document.getElementById("tutorial-complete").classList.add("show");
  tone(680, .07);
  setTimeout(() => tone(860, .1), 80);
}

function selectTutorialStage(index) {
  tutorialIndex = Math.max(0, Math.min(tutorialStages.length - 1, index));
  tutorial = freshTutorialSession(tutorialStages[tutorialIndex].text);
  document.getElementById("tutorial-complete").classList.remove("show");
  renderTutorial();
  document.getElementById("tutorial-sequence").focus();
}

function renderSpeed() {
  document.getElementById("speed-text").innerHTML = textMarkup(speed);
  const metrics = sessionMetrics(speed);
  setText("speed-wpm", metrics.wpm);
  setText("speed-cpm", metrics.cpm);
  setText("speed-accuracy", metrics.accuracy);
  highlightExpected(speed.text[speed.index] || "");
}

function sessionMetrics(session) {
  return Core.calculateTypingMetrics(session);
}

function handleTyping(event, session, mode) {
  if (event.metaKey || session.ended || ((event.ctrlKey || event.altKey) && event.key.length !== 1)) return;
  if (event.key === "Backspace") {
    event.preventDefault();
    if (session.index > 0) {
      session.index--;
      session.typed.pop();
      session.correct = session.typed.reduce((sum, char, i) => sum + (char === session.text[i] ? 1 : 0), 0);
      session.corrections++;
      session.streak = 0;
    }
    mode === "practice" ? renderPractice() : renderSpeed();
    return;
  }
  if (event.key.length !== 1) return;
  event.preventDefault();
  if (!session.started) {
    session.started = Date.now();
    if (mode === "speed") startSpeed();
  }
  const expected = session.text[session.index];
  const correct = event.key === expected;
  session.attempts++;
  session.typed.push(event.key);
  session.index++;
  if (correct) {
    session.correct++;
    session.correctKeystrokes++;
    session.streak++;
    session.bestStreak = Math.max(session.bestStreak, session.streak);
    progress.keyHits[expected.toLowerCase()] = (progress.keyHits[expected.toLowerCase()] || 0) + 1;
    feedbackSound("correct");
  } else {
    session.errors++;
    session.incorrectKeystrokes++;
    session.streak = 0;
    progress.keyMisses[expected.toLowerCase()] = (progress.keyMisses[expected.toLowerCase()] || 0) + 1;
    feedbackSound("wrong");
  }
  flashKey(event.code, correct);
  if (mode === "practice") {
    renderPractice();
    if (session.index >= session.text.length) finishPractice();
  } else {
    renderSpeed();
    if (session.index >= session.text.length) {
      const extra = " " + speedTexts[Math.floor(Math.random() * speedTexts.length)];
      speed.text += extra;
      renderSpeed();
    }
  }
}

function finishPractice() {
  practice.ended = true;
  const metrics = sessionMetrics(practice);
  const seconds = Math.max(1, Math.round((Date.now() - practice.started) / 1000));
  if (!progress.completed.includes(currentLesson)) progress.completed.push(currentLesson);
  recordSession(Core.makeSessionRecord({
    kind: "lesson",
    label: `Lekcja: ${lessons[currentLesson].title}`,
    startedAt: new Date(practice.started).toISOString(),
    durationSeconds: seconds,
    typedChars: practice.attempts,
    correctChars: practice.correct,
    attempts: practice.attempts,
    errors: practice.incorrectKeystrokes,
    corrections: practice.corrections,
    accuracy: metrics.accuracy,
    wpm: metrics.wpm,
    cpm: metrics.cpm
  }), seconds);
  saveProgress();
  setText("result-wpm", metrics.wpm);
  setText("result-accuracy", metrics.accuracy);
  setText("result-streak", practice.bestStreak);
  document.getElementById("result-modal").classList.add("open");
  document.getElementById("result-modal").setAttribute("aria-hidden", "false");
  buildLessonTrack();
  renderProgress();
  tone(660, .08); setTimeout(() => tone(820, .12), 90);
}

function selectLesson(index) {
  currentLesson = index;
  practice = freshSession(lessons[index].text);
  buildLessonTrack();
  renderPractice();
  document.getElementById("practice-text").focus();
}

function resetSpeed() {
  clearInterval(speedTimer);
  speedTimer = null;
  speed = freshSession(speedTexts[Math.floor(Math.random() * speedTexts.length)]);
  setText("speed-timer", formatTime(speedDuration));
  document.getElementById("start-speed").textContent = "Rozpocznij test";
  setText("speed-action-hint", "Zacznij pisać lub kliknij przycisk");
  document.querySelector(".speed-main").classList.remove("finished");
  renderSpeed();
}

function startSpeed() {
  if (speedTimer) return;
  if (!speed.started) speed.started = Date.now();
  let remaining = speedDuration;
  document.getElementById("start-speed").textContent = "Test trwa";
  setText("speed-action-hint", "Pisz spokojnie — liczy się także dokładność");
  speedTimer = setInterval(() => {
    remaining--;
    setText("speed-timer", formatTime(remaining));
    renderSpeed();
    if (remaining <= 0) finishSpeed();
  }, 1000);
}

function finishSpeed() {
  clearInterval(speedTimer);
  speedTimer = null;
  speed.ended = true;
  const metrics = sessionMetrics(speed);
  if (!speed.index) metrics.accuracy = 0;
  if (speed.attempts) {
    recordSession(Core.makeSessionRecord({
      kind: "speed-test",
      label: `Test szybkości · ${speedDuration} s`,
      startedAt: new Date(speed.started || Date.now()).toISOString(),
      durationSeconds: speedDuration,
      typedChars: speed.attempts,
      correctChars: speed.correct,
      attempts: speed.attempts,
      errors: speed.incorrectKeystrokes,
      corrections: speed.corrections,
      accuracy: metrics.accuracy,
      wpm: metrics.wpm,
      cpm: metrics.cpm
    }), speedDuration);
  }
  saveProgress();
  setText("speed-result-wpm", metrics.wpm);
  setText("speed-result-accuracy", `${metrics.accuracy}%`);
  setText("speed-result-chars", speed.index);
  setText("speed-result-title", speedResultTitle(metrics, speed.index));
  setText("speed-result-copy", speedResultCopy(metrics, speed.index));
  document.querySelector(".speed-main").classList.add("finished");
  document.getElementById("start-speed").textContent = "Nowa próba";
  setText("speed-action-hint", "Kliknij, aby przygotować nowy tekst");
  renderProgress();
  showToast(`Test zakończony: ${metrics.wpm} WPM, dokładność ${metrics.accuracy}%`);
}

function speedResultTitle(metrics, chars) {
  if (!chars) return "Czekamy na pierwsze znaki";
  if (metrics.accuracy >= 96 && metrics.wpm >= 45) return "Świetne tempo i precyzja";
  if (metrics.accuracy >= 94) return "Bardzo dobra dokładność";
  if (metrics.wpm >= 35) return "Dobre tempo";
  return "Dobry początek";
}

function speedResultCopy(metrics, chars) {
  if (!chars) return "W kolejnej próbie zacznij pisać od razu po uruchomieniu licznika.";
  if (metrics.accuracy < 90) return "Zwolnij odrobinę w kolejnej próbie. Dokładność szybko przełoży się na większe tempo.";
  if (metrics.accuracy < 96) return "Rytm jest dobry. Skup się na najtrudniejszych znakach, aby ograniczyć drobne błędy.";
  return "Palce pracują bardzo pewnie. Utrzymaj ten rytm i spróbuj pobić wynik w kolejnej próbie.";
}

const gameLevelNames = ["Rząd podstawowy", "Obie dłonie", "Górny rząd", "Cała klawiatura", "Szybkie pary", "Refleks", "Płynność", "Turbo", "Ekspert", "Mistrz"];
const gameLevelSets = ["asdfjkl", "asdfghjkl", "asdfjklqwertyuiop", "abcdefghijklmnopqrstuvwxyz"];
const arcadeWords = ["las", "dom", "rytm", "klasa", "palce", "tempo", "ekran", "nauka", "klawisz", "dokładność", "spokojnie", "mistrz"];
const arcadePhrases = [
  "piszę bez patrzenia", "palce wracają na bazę", "dokładność buduje tempo",
  "spokojny rytm daje pewność", "każdy klawisz ma swój palec", "trening czyni mistrza"
];
const polishChars = "ąćęłńóśźż";
const arcadeModes = [
  { id: "rain", number: 1, title: "Deszcz liter", short: "Refleks i palce", color: "#64b5f6", description: "Naciśnij literę, zanim jej kafelek przekroczy czerwoną linię.", intro: "Łap litery palcami", instruction: "Zaczynamy bardzo wolno. Gra dopasuje tempo do Twojej szybkości i dokładności.", type: "falling" },
  { id: "balloons", number: 2, title: "Baloniki liter", short: "Celność pod presją", color: "#ff91c8", description: "Przebijaj unoszące się litery, zanim odlecą ponad linię.", intro: "Nie pozwól im odlecieć", instruction: "Najbliższy górnej linii balonik pulsuje. Wciśnij jego literę właściwym palcem.", type: "falling" },
  { id: "race", number: 3, title: "Wyścig słów", short: "Płynne frazy", color: "#62dbb5", description: "Pisz frazy bez zatrzymywania, aby przesuwać znacznik do mety.", intro: "Dojedź do mety", instruction: "Każdy poprawny znak przesuwa Cię naprzód. Błędy kosztują życie.", type: "target" },
  { id: "builder", number: 4, title: "Budowniczy słów", short: "Łączenie liter", color: "#f5c96a", description: "Buduj kolejne słowa znak po znaku i utrzymuj serię.", intro: "Zbuduj słowo", instruction: "Pisz podświetlane litery po kolei. Co trzy słowa wejdziesz na wyższy poziom.", type: "target" },
  { id: "memory", number: 5, title: "Pamięć palców", short: "Pamięć mięśniowa", color: "#9d91ff", description: "Zapamiętaj krótką sekwencję, a potem odtwórz ją bez podpowiedzi.", intro: "Zapamiętaj i odtwórz", instruction: "Sekwencja za chwilę zniknie. Wtedy wpisz ją z pamięci.", type: "target" },
  { id: "accents", number: 6, title: "Polskie znaki", short: "Ą Ć Ę Ł Ń Ó Ś Ź Ż", color: "#ff7a68", description: "Trenuj polskie znaki i skróty potrzebne do ich wpisywania.", intro: "Oswój polskie znaki", instruction: "Wpisuj wskazane znaki. Na Windows używaj prawego Alt, a na macOS klawisza Option.", type: "target" },
  { id: "rhythm", number: 7, title: "Rytm klawiatury", short: "Równe tempo", color: "#e8ff47", description: "Utrzymuj serię i wpisuj znaki w pulsującym rytmie.", intro: "Złap równy rytm", instruction: "Nie śpiesz się. Pisz kolejne znaki zgodnie z pulsem planszy.", type: "target", duration: 35 },
  { id: "marathon", number: 8, title: "Mistrzowski maraton", short: "Wszystkie umiejętności", color: "#ff36c8", description: "Finałowa próba łączy litery, słowa, polskie znaki i presję czasu.", intro: "Pokaż pełną kontrolę", instruction: "Masz 45 sekund i trzy życia. Pisz dokładnie, aby zdobyć jak najwięcej punktów.", type: "target", duration: 45 }
];

function currentGameMode() {
  return arcadeModes.find(mode => mode.id === activeGameMode) || arcadeModes[0];
}

function freshGameState(running = true) {
  return {
    running, mode: activeGameMode, score: 0, lives: 3, level: 1, levelHits: 0, hits: 0, misses: 0,
    combo: 0, bestCombo: 0, pace: .32, targetPace: .32, items: [], activeTarget: null, lastSpawn: 0, lastFrame: 0,
    raf: null, timer: null, roundTimer: null, memoryTimer: null, target: "", index: 0, rounds: 0,
    timeLeft: 0, memoryVisible: false, started: running ? Date.now() : 0
  };
}

function renderGameLibrary() {
  document.getElementById("game-library").innerHTML = arcadeModes.map(mode => `
    <button class="game-mode-card ${mode.id === activeGameMode ? "active" : ""}" data-game-mode="${mode.id}" style="--mode-color:${mode.color}">
      <b>${mode.number}</b><span><strong>${mode.title}</strong><small>${mode.short}</small></span>
    </button>`).join("");
}

function selectGameMode(modeId, announce = true) {
  const mode = arcadeModes.find(item => item.id === modeId) || arcadeModes[0];
  stopCurrentGame();
  cleanGameStage();
  activeGameMode = mode.id;
  localStorage.setItem("mok-game-mode", mode.id);
  game = freshGameState(false);
  document.getElementById("game-stage").dataset.mode = mode.id;
  setText("game-title", mode.title);
  setText("game-description", mode.description);
  setText("game-hint-label", mode.type === "falling" ? "Najbliższa litera" : "Następny znak");
  document.querySelectorAll("[data-game-mode]").forEach(button => button.classList.toggle("active", button.dataset.gameMode === mode.id));
  const overlay = document.getElementById("game-overlay");
  overlay.classList.remove("hidden");
  overlay.querySelector(".game-kicker").textContent = `GRA ${mode.number}`;
  overlay.querySelector("h2").textContent = mode.intro;
  overlay.querySelector("p").textContent = mode.instruction;
  document.getElementById("start-game").textContent = "Rozpocznij grę";
  document.getElementById("arcade-target").innerHTML = "";
  setText("arcade-helper", mode.type === "target" ? mode.instruction : "");
  setText("game-finger", "Czekam na start");
  highlightExpected("");
  highlightFinger("");
  updateGameHud();
  if (announce) showToast(`Wybrano: ${mode.title}`);
}

function stopCurrentGame() {
  if (!game) return;
  game.running = false;
  cancelAnimationFrame(game.raf);
  clearInterval(game.timer);
  clearTimeout(game.roundTimer);
  clearTimeout(game.memoryTimer);
}

function cleanGameStage() {
  document.querySelectorAll("#game-stage .fall-key, #game-stage .mistake-bubble").forEach(item => item.remove());
}

function startGame() {
  stopCurrentGame();
  cleanGameStage();
  game = freshGameState(true);
  game.lastSpawn = performance.now() - 1700;
  document.getElementById("game-overlay").classList.add("hidden");
  document.getElementById("start-game").textContent = "Zagraj ponownie";
  updateGameHud();
  if (currentGameMode().type === "falling") game.raf = requestAnimationFrame(gameLoop);
  else startArcadeMode();
}

function gameLoop(now) {
  if (!game.running) return;
  const mode = currentGameMode();
  const stage = document.getElementById("game-stage");
  const frameScale = game.lastFrame ? Math.min(2, (now - game.lastFrame) / 16.67) : 1;
  game.lastFrame = now;
  game.pace += (game.targetPace - game.pace) * .025 * frameScale;
  const interval = Math.max(480, 3300 - game.pace * 1000 - game.level * 40);
  if (now - game.lastSpawn > interval) {
    spawnLetter(stage);
    game.lastSpawn = now;
  }
  const lineY = stage.clientHeight - 66;
  game.items.slice().forEach(item => {
    item.y += item.speed * game.pace * frameScale * item.direction;
    const progressToLine = mode.id === "balloons" ? (lineY - item.y) / Math.max(1, lineY) : item.y / Math.max(1, lineY);
    const growth = 1 + Math.min(.38, Math.max(0, progressToLine) * .38) + (item === game.activeTarget ? .12 : 0);
    item.el.style.transform = `translateY(${item.y}px) rotate(${Math.sin(item.y / 35) * 3}deg) scale(${growth})`;
    if ((mode.id === "balloons" && item.y <= 76) || (mode.id !== "balloons" && item.y + 56 >= lineY)) missLetter(item);
  });
  updateGameTarget();
  updateSpeedometer();
  game.raf = requestAnimationFrame(gameLoop);
}

function spawnLetter(stage) {
  const mode = currentGameMode();
  const chars = gameLevelSets[Math.min(gameLevelSets.length - 1, Math.floor((game.level - 1) / 2))];
  const char = chars[Math.floor(Math.random() * chars.length)];
  const group = fingerFor(char);
  const el = document.createElement("div");
  const balloon = mode.id === "balloons";
  el.className = `fall-key${balloon ? " balloon-key" : ""}`;
  if (balloon) {
    el.innerHTML = `<span class="balloon-letter">${char.toUpperCase()}</span><i class="balloon-shine"></i><i class="balloon-string"></i>`;
  } else {
    el.textContent = char.toUpperCase();
  }
  const startX = stage.clientWidth > 760 ? 360 : 20;
  el.style.left = `${startX + Math.random() * Math.max(10, stage.clientWidth - startX - (balloon ? 96 : 76))}px`;
  el.style.top = "4px";
  el.style.setProperty("--fall-color", group.color);
  stage.appendChild(el);
  game.items.push({ char, el, y: balloon ? stage.clientHeight - 120 : 0, speed: 1.05 + Math.random() * .2, direction: balloon ? -1 : 1 });
}

function hitGameLetter(key) {
  if (!game.running || key.length !== 1) return;
  const matches = game.items.filter(item => item.char === key.toLowerCase()).sort((a, b) => b.y - a.y);
  if (!matches.length) {
    game.misses++;
    game.combo = 0;
    game.targetPace = Math.max(.28, game.targetPace - .16);
    showMistakeBubble(key);
    feedbackSound("wrong");
    updateGameHud();
    return;
  }
  const item = matches[0];
  const stage = document.getElementById("game-stage");
  const reaction = Math.max(0, 1 - item.y / Math.max(1, stage.clientHeight - 120));
  game.hits++;
  game.levelHits++;
  game.combo++;
  game.bestCombo = Math.max(game.bestCombo, game.combo);
  game.score += 10 + game.level * 2 + Math.min(10, game.combo);
  game.targetPace = Math.min(2.35, game.targetPace + .025 + reaction * .035 + Math.min(.025, game.combo * .002));
  removeGameItem(item, "hit");
  if (game.levelHits >= 10 && game.level < 10) levelUpGame();
  feedbackSound("correct");
  updateGameHud();
}

function missLetter(item) {
  game.lives--;
  game.misses++;
  game.combo = 0;
  game.targetPace = Math.max(.28, game.targetPace - .22);
  removeGameItem(item, "missed");
  updateGameHud();
  feedbackSound("wrong");
  if (game.lives <= 0) endGame();
}

function removeGameItem(item, cls) {
  game.items = game.items.filter(other => other !== item);
  if (game.activeTarget === item) game.activeTarget = null;
  item.el.classList.add(cls);
  setTimeout(() => item.el.remove(), 260);
}

function updateGameTarget() {
  const nextTarget = game.items.slice().sort((a, b) => currentGameMode().id === "balloons" ? a.y - b.y : b.y - a.y)[0] || null;
  if (nextTarget === game.activeTarget) return;
  game.items.forEach(item => item.el.classList.toggle("urgent", item === nextTarget));
  game.activeTarget = nextTarget;
  if (!nextTarget) {
    setText("game-finger", "Czekam na literę");
    highlightExpected("");
    highlightFinger("");
    return;
  }
  setText("game-finger", `${nextTarget.char.toUpperCase()} · ${fingerNameFor(nextTarget.char)}`);
  highlightExpected(nextTarget.char);
  highlightFinger(nextTarget.char);
}

function startArcadeMode() {
  const mode = currentGameMode();
  game.timeLeft = mode.duration || 0;
  prepareArcadeRound();
  updateGameHud();
  if (mode.duration) {
    game.timer = setInterval(() => {
      if (!game.running) return;
      game.timeLeft--;
      renderArcadeChallenge();
      updateGameHud();
      if (game.timeLeft <= 0) endGame();
    }, 1000);
  }
}

function prepareArcadeRound() {
  if (!game.running) return;
  const mode = currentGameMode();
  game.index = 0;
  game.memoryVisible = mode.id === "memory";
  if (mode.id === "race") game.target = arcadePhrases[Math.floor(Math.random() * arcadePhrases.length)];
  else if (mode.id === "builder") game.target = arcadeWords[Math.floor(Math.random() * arcadeWords.length)];
  else if (mode.id === "memory") {
    const chars = gameLevelSets[Math.min(3, Math.floor((game.level - 1) / 2))];
    game.target = Array.from({ length: Math.min(9, 3 + game.level) }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  } else if (mode.id === "accents") {
    game.target = Array.from({ length: Math.min(12, 5 + game.level) }, () => polishChars[Math.floor(Math.random() * polishChars.length)]).join("");
  } else if (mode.id === "rhythm") {
    const chars = gameLevelSets[Math.min(3, Math.floor((game.level - 1) / 2))];
    game.target = Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  } else {
    game.target = `${arcadePhrases[Math.floor(Math.random() * arcadePhrases.length)]} ${polishChars[Math.floor(Math.random() * polishChars.length)]}`;
  }
  renderArcadeChallenge();
  if (mode.id === "memory") {
    game.memoryTimer = setTimeout(() => {
      game.memoryVisible = false;
      renderArcadeChallenge();
    }, Math.max(950, 1900 - game.level * 90));
  }
}

function renderArcadeChallenge() {
  const mode = currentGameMode();
  const target = document.getElementById("arcade-target");
  target.className = `arcade-target ${mode.id}-style${mode.id === "memory" && !game.memoryVisible ? " memory-hidden" : ""}`;
  target.innerHTML = [...game.target].map((char, index) => {
    const cls = index < game.index ? "done" : index === game.index ? "current" : "";
    return `<span class="arcade-char ${cls}">${char === " " ? "&nbsp;" : escapeHtml(char)}</span>`;
  }).join("");
  setText("arcade-kicker", mode.id === "memory" && game.memoryVisible ? "ZAPAMIĘTAJ SEKWENCJĘ" : mode.id === "race" ? "WYŚCIG DO METY" : mode.duration ? `${game.timeLeft} SEKUND` : `RUNDA ${game.rounds + 1}`);
  const helper = mode.id === "memory"
    ? game.memoryVisible ? "Patrz uważnie. Za chwilę sekwencja zniknie." : "Teraz wpisz całą sekwencję z pamięci."
    : mode.id === "accents" ? platformDetails[progress.profile.platform] || "Wybierz system w profilu treningowym, aby zobaczyć właściwy skrót."
    : mode.id === "rhythm" ? "Utrzymaj równy rytm i nie przerywaj serii."
    : mode.id === "marathon" ? "Litery, słowa i polskie znaki w jednej próbie."
    : mode.instruction;
  setText("arcade-helper", helper);
  document.getElementById("arcade-runner").style.setProperty("--runner", `${game.target.length ? game.index / game.target.length * 100 : 0}%`);
  const next = game.target[game.index] || "";
  const hideHint = mode.id === "memory";
  setText("game-finger", next && !hideHint ? `${next === " " ? "SPACJA" : next.toUpperCase()} · ${fingerNameFor(next)}` : hideHint ? "Zaufaj pamięci palców" : "Nowa runda");
  highlightExpected(hideHint ? "" : next);
  highlightFinger(hideHint ? "" : next);
}

function handleArcadeKey(key) {
  if (!game.running || key.length !== 1 || game.memoryVisible) return;
  const expected = game.target[game.index];
  const correct = key.toLocaleLowerCase("pl-PL") === expected.toLocaleLowerCase("pl-PL");
  if (!correct) {
    game.misses++;
    game.combo = 0;
    game.lives--;
    game.targetPace = Math.max(.28, game.targetPace - .12);
    showMistakeBubble(key);
    feedbackSound("wrong");
    updateGameHud();
    if (game.lives <= 0) endGame();
    return;
  }
  game.index++;
  game.hits++;
  game.levelHits++;
  game.combo++;
  game.bestCombo = Math.max(game.bestCombo, game.combo);
  game.score += 8 + game.level * 2 + Math.min(12, game.combo);
  game.targetPace = Math.min(2.35, game.targetPace + .035);
  game.pace += (game.targetPace - game.pace) * .35;
  feedbackSound("correct");
  if (game.index >= game.target.length) completeArcadeRound();
  else renderArcadeChallenge();
  updateGameHud();
}

function completeArcadeRound() {
  game.rounds++;
  game.score += 30 + game.level * 8;
  if (game.rounds % 3 === 0 && game.level < 10) levelUpGame();
  setText("arcade-helper", "Runda ukończona. Przygotuj palce na kolejny cel.");
  tone(720, .07);
  game.roundTimer = setTimeout(prepareArcadeRound, 450);
}

function levelUpGame() {
  game.level++;
  game.levelHits = 0;
  game.targetPace = Math.max(game.targetPace, .32 + (game.level - 1) * .13);
  const banner = document.getElementById("level-up-banner");
  banner.querySelector("strong").textContent = game.level;
  banner.querySelector("small").textContent = game.level >= 8 ? "Tryb mistrzowski!" : "Przyspieszamy!";
  banner.classList.add("show");
  clearTimeout(levelUpGame.timer);
  levelUpGame.timer = setTimeout(() => banner.classList.remove("show"), 1100);
  tone(720, .07);
  setTimeout(() => tone(900, .1), 80);
}

function showMistakeBubble(key) {
  const stage = document.getElementById("game-stage");
  const bubble = document.createElement("div");
  bubble.className = "mistake-bubble";
  bubble.textContent = key.toUpperCase();
  bubble.style.setProperty("--bubble-left", `${20 + Math.random() * 60}%`);
  stage.appendChild(bubble);
  const speedometer = document.querySelector(".speedometer");
  speedometer.classList.remove("braking");
  void speedometer.offsetWidth;
  speedometer.classList.add("braking");
  setTimeout(() => bubble.remove(), 620);
}

function endGame() {
  if (!game.running) return;
  const endedAt = Date.now();
  stopCurrentGame();
  const mode = currentGameMode();
  const overlay = document.getElementById("game-overlay");
  overlay.classList.remove("hidden");
  overlay.querySelector(".game-kicker").textContent = "KONIEC GRY";
  overlay.querySelector("h2").textContent = `${game.score} punktów`;
  overlay.querySelector("p").textContent = `${mode.title}: poziom ${game.level}, ${game.hits} poprawnych znaków i najlepsza seria ${game.bestCombo}. Jeszcze jedna próba?`;
  document.getElementById("start-game").textContent = "Zagraj ponownie";
  const accuracy = game.hits + game.misses ? Math.round(game.hits / (game.hits + game.misses) * 100) : 0;
  const durationSeconds = game.started ? Math.max(1, Math.round((endedAt - game.started) / 1000)) : 0;
  recordSession(Core.makeSessionRecord({
    kind: "game",
    label: `Gra: ${mode.title}`,
    startedAt: game.started ? new Date(game.started).toISOString() : null,
    endedAt,
    durationSeconds,
    typedChars: game.hits + game.misses,
    correctChars: game.hits,
    attempts: game.hits + game.misses,
    errors: game.misses,
    accuracy,
    score: game.score,
    level: game.level
  }), durationSeconds);
  saveProgress();
  renderProgress();
}

function updateGameHud() {
  const mode = currentGameMode();
  setText("game-score", game.score);
  setText("game-level", game.level);
  setText("game-level-stage", game.level);
  setText("game-combo", game.combo);
  setText("game-lives", game.lives);
  setText("game-level-copy", mode.type === "falling" ? gameLevelNames[game.level - 1] : mode.short);
  const levelHits = mode.type === "falling" ? Math.min(10, game.levelHits) : game.target.length ? game.index : 0;
  const goal = mode.type === "falling" ? 10 : Math.max(1, game.target.length);
  setText("game-level-hits", mode.duration ? `${game.timeLeft} s · ${game.rounds} rund` : game.level === 10 ? "Poziom mistrzowski" : `${levelHits} / ${goal} znaków`);
  document.getElementById("game-level-progress").style.width = `${Math.min(100, levelHits / goal * 100)}%`;
  updateSpeedometer();
}

function updateSpeedometer() {
  const percent = Math.max(0, Math.min(100, (game.pace - .28) / (2.35 - .28) * 100));
  document.getElementById("speedometer-needle").style.setProperty("--speed-angle", `${-82 + percent * 164}deg`);
  setText("game-speed", `${game.pace.toFixed(1)}×`);
  setText("game-speed-name", percent < 18 ? "Rozgrzewka" : percent < 40 ? "Spokojnie" : percent < 65 ? "Dobre tempo" : percent < 85 ? "Szybko" : "Turbo");
}

function recordSession(session, activitySeconds = 0) {
  progress.sessions.push(session);
  progress.totalChars = (progress.totalChars || 0) + session.typedChars;
  progress.totalCorrectChars = (progress.totalCorrectChars || 0) + session.correctChars;
  Core.recordActivity(progress, activitySeconds);
  progress.bestWpm = Core.summarizeSessions(progress.sessions).bestWpm;
}

function renderProgress() {
  const sessions = progress.sessions || [];
  const summary = Core.summarizeSessions(sessions);
  const streak = Core.streakSummary(progress.activityDays);
  const goal = goalDetails[progress.profile.goal] || goalDetails.start;
  const xp = progress.completed.length * 120 + Math.floor(progress.totalChars / 10);
  const level = Math.floor(xp / 500) + 1;
  setText("profile-level", level);
  setText("profile-xp", `${xp} XP`);
  setText("best-wpm", summary.bestWpm);
  setText("completed-lessons", progress.completed.length);
  setText("total-chars", (progress.totalCorrectChars || 0).toLocaleString("pl-PL"));
  setText("avg-accuracy", summary.accuracy);
  setText("total-minutes", Math.round(progress.totalSeconds / 60));
  setText("total-sessions", summary.totalSessions);
  setText("longest-streak", streak.longest);
  setText("progress-goal-title", goal.title);
  document.getElementById("xp-bar").style.width = `${xp % 500 / 5}%`;
  document.getElementById("progress-message").textContent = progress.completed.length
    ? `${goal.guidance} Masz ukończone ${progress.completed.length} z ${lessons.length} lekcji.`
    : `${goal.guidance} Ukończ pierwszą lekcję, aby zobaczyć swój rozwój.`;
  updateRewards();
  renderChart(summary.typingSessions);
  renderMastery();
  renderSessionHistory(sessions);
  renderProfile();
}

function renderChart(sessions) {
  const chart = document.getElementById("history-chart");
  const typingSessions = sessions.filter(Core.isQualifiedWpmSession);
  if (!typingSessions.length) {
    chart.innerHTML = `<span class="empty-chart">Pierwszy wiarygodny wykres pojawi się po ukończeniu testu szybkości z dokładnością co najmniej 85%.</span>`;
    return;
  }
  const visible = typingSessions.slice(-10);
  const max = Math.max(40, ...visible.map(session => session.wpm));
  chart.innerHTML = visible.map((session, index) => `<div class="chart-col" title="${escapeHtml(session.label)} · ${session.accuracy}% dokładności"><i class="chart-bar" data-value="${session.wpm}" style="height:${Math.max(4, session.wpm / max * 100)}%"></i><small>${index + 1}</small></div>`).join("");
}

function renderSessionHistory(sessions) {
  setText("history-count", `${sessions.length} ${sessions.length === 1 ? "sesja" : "sesji"}`);
  const history = document.getElementById("session-history");
  if (!sessions.length) {
    history.innerHTML = `<span class="empty-chart">Historia pojawi się po pierwszym ukończonym treningu.</span>`;
    return;
  }
  history.innerHTML = [...sessions].reverse().map(session => {
    const primary = session.kind === "game"
      ? `${session.score || 0} pkt`
      : session.kind === "tutorial"
        ? "Etap"
        : session.durationSeconds && session.wpm !== null && Number.isFinite(Number(session.wpm))
          ? `${session.wpm} WPM`
          : "Archiwum";
    const date = session.endedAt ? new Intl.DateTimeFormat("pl-PL", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(session.endedAt)) : "Starsza sesja";
    return `<div class="session-row">
      <div><strong>${escapeHtml(session.label)}</strong><small>${date}</small></div>
      <span class="session-metric"><b>${primary}</b><span>wynik</span></span>
      <span class="session-metric session-accuracy"><b>${session.accuracy}%</b><span>dokładność</span></span>
      <span class="session-metric session-duration"><b>${formatDuration(session.durationSeconds)}</b><span>czas</span></span>
    </div>`;
  }).join("");
}

function renderMastery() {
  const chars = "qwertyuiopasdfghjklzxcvbnm";
  document.getElementById("mastery-grid").innerHTML = [...chars].map(char => {
    const hits = progress.keyHits[char] || 0;
    const misses = progress.keyMisses[char] || 0;
    const confidence = hits ? Math.max(8, Math.round(hits / (hits + misses) * Math.min(100, hits * 5))) : 0;
    return `<span class="mastery-key" style="--mastery:${confidence}%">${char.toUpperCase()}</span>`;
  }).join("");
}

function renderProfile() {
  const profile = progress.profile;
  const goal = goalDetails[profile.goal] || goalDetails.start;
  const platform = platformDetails[profile.platform] || "Wybierz system, aby otrzymywać właściwe wskazówki dla znaków specjalnych.";
  const platformSelect = document.getElementById("profile-platform");
  const goalSelect = document.getElementById("profile-goal");
  const dailySelect = document.getElementById("profile-daily-goal");
  if (platformSelect) platformSelect.value = profile.platform || "windows";
  if (goalSelect) goalSelect.value = profile.goal || "start";
  if (dailySelect) dailySelect.value = String(profile.dailyGoalMinutes || 10);
  setText("profile-guidance", `${goal.guidance} ${platform}`);
  setText("daily-goal-minutes", profile.dailyGoalMinutes || 10);
}

function saveProfile(platform, goal, dailyGoalMinutes) {
  progress.profile = {
    platform,
    goal,
    dailyGoalMinutes: Number(dailyGoalMinutes) || 10,
    configured: true
  };
  saveProgress();
  renderProfile();
  renderProgress();
}

function openProfileModal() {
  const modal = document.getElementById("profile-modal");
  document.getElementById("onboarding-platform").value = progress.profile.platform || "windows";
  document.getElementById("onboarding-goal").value = progress.profile.goal || "start";
  document.getElementById("onboarding-daily-goal").value = String(progress.profile.dailyGoalMinutes || 10);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("onboarding-platform").focus();
}

function closeProfileModal() {
  const modal = document.getElementById("profile-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function highlightExpected(char) {
  document.querySelectorAll(".key.expected").forEach(key => key.classList.remove("expected"));
  const code = codeForChar(char);
  if (code) document.querySelectorAll(`[data-code="${code}"]`).forEach(key => key.classList.add("expected"));
}

function highlightFinger(char) {
  document.querySelectorAll(".finger.active").forEach(finger => { finger.classList.remove("active"); finger.style.removeProperty("--finger-color"); });
  if (!char) return;
  const group = fingerFor(char.toLowerCase());
  const indexMap = [
    [".left-hand .pinky"], [".left-hand .ring"], [".left-hand .middle"],
    [".left-hand .index", ".right-hand .index"], [".right-hand .middle"], [".right-hand .ring"], [".right-hand .pinky"], [".left-hand .thumb", ".right-hand .thumb"]
  ];
  const idx = fingerGroups.indexOf(group);
  let selectors = indexMap[idx] || [];
  if (idx === 3) {
    const base = char.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace("ł", "l");
    selectors = "45rtfgvb".includes(base) ? [".left-hand .index"] : [".right-hand .index"];
  }
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(finger => {
      finger.classList.add("active");
      finger.style.setProperty("--finger-color", group.color);
    });
  });
}

function flashKey(code, correct = true) {
  setText("pressed-key", code === "Space" ? "SPACJA" : code.replace("Key", "").replace("Digit", ""));
  if (activeView === "tutorial") setText("tutorial-pressed-key", code === "Space" ? "SPACJA" : code.replace("Key", "").replace("Digit", ""));
  document.querySelectorAll(`[data-code="${code}"]`).forEach(key => {
    const feedbackClass = correct ? "feedback-correct" : "feedback-wrong";
    key.classList.remove("pressed", "feedback-correct", "feedback-wrong");
    key.classList.add(feedbackClass);
    setTimeout(() => {
      key.classList.remove(feedbackClass);
      key.style.setProperty("--key-color", key.dataset.color);
    }, correct ? 160 : 360);
  });
}

function fingerFor(char) {
  const base = char.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace("ł", "l");
  return fingerGroups.find(group => group.keys.includes(base)) || fingerGroups[6];
}

function fingerNameFor(char) {
  const base = char.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace("ł", "l");
  if ("45rtfgvb".includes(base)) return "Lewy wskazujący";
  if ("67yuhjnm".includes(base)) return "Prawy wskazujący";
  return fingerFor(base).name;
}

function codeForChar(char) {
  if (!char) return "";
  const lower = char.toLowerCase();
  if (/[a-ząćęłńóśźż]/.test(lower)) {
    const base = lower.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace("ł", "l");
    return `Key${base.toUpperCase()}`;
  }
  if (/\d/.test(char)) return `Digit${char}`;
  return keyToCode[char] || "";
}

function syncActiveGuidance() {
  let next = "";
  if (activeView === "practice") next = practice.text[practice.index] || "";
  else if (activeView === "tutorial" && !tutorial.ended) next = tutorial.text[tutorial.index] || "";
  else if (activeView === "speed" && !speed.ended) next = speed.text[speed.index] || "";
  else if (activeView === "game" && game.running) {
    next = currentGameMode().type === "falling" ? game.activeTarget?.char || "" : game.memoryVisible ? "" : game.target[game.index] || "";
  }
  highlightExpected(next);
  highlightFinger(next);
}

function startInterfaceTour() {
  if (techniqueShowOpen) closeTechniqueShow();
  interfaceTourReturnView = activeView;
  interfaceTourIndex = 0;
  interfaceTourOpen = true;
  const tour = document.getElementById("interface-tour");
  tour.classList.add("open");
  tour.setAttribute("aria-hidden", "false");
  document.body.classList.add("tour-active");
  renderInterfaceTourStep();
}

function renderInterfaceTourStep() {
  const step = interfaceTourSteps[interfaceTourIndex];
  switchView(step.view);
  setText("tour-step-label", `${interfaceTourIndex + 1} / ${interfaceTourSteps.length}`);
  setText("tour-kicker", step.kicker);
  setText("tour-title", step.title);
  setText("tour-copy", step.copy);
  document.getElementById("tour-back").disabled = interfaceTourIndex === 0;
  setText("tour-next", interfaceTourIndex === interfaceTourSteps.length - 1 ? "Zakończ" : "Dalej");

  const sidebarTarget = step.selector === ".main-nav" || step.selector === ".guide-menu";
  if (window.innerWidth <= 820) document.querySelector(".sidebar").classList.toggle("open", sidebarTarget);
  requestAnimationFrame(() => {
    const target = document.querySelector(step.selector);
    if (!target) return;
    target.scrollIntoView({ block: "center", inline: "center" });
    setTimeout(() => positionInterfaceTour(target), 140);
  });
}

function positionInterfaceTour(target) {
  if (!interfaceTourOpen || !target) return;
  const rect = target.getBoundingClientRect();
  const gap = 12;
  const padding = 8;
  const spotlight = document.getElementById("tour-spotlight");
  spotlight.style.left = `${Math.max(6, rect.left - padding)}px`;
  spotlight.style.top = `${Math.max(6, rect.top - padding)}px`;
  spotlight.style.width = `${Math.min(window.innerWidth - 12, rect.width + padding * 2)}px`;
  spotlight.style.height = `${Math.min(window.innerHeight - 12, rect.height + padding * 2)}px`;

  const bubble = document.getElementById("tour-bubble");
  if (window.innerWidth <= 700) {
    bubble.style.left = "12px";
    bubble.style.right = "12px";
    bubble.style.top = "auto";
    bubble.style.bottom = "12px";
    return;
  }
  bubble.style.right = "auto";
  bubble.style.bottom = "auto";
  const bubbleRect = bubble.getBoundingClientRect();
  let left = rect.right + gap;
  let top = rect.top;
  if (left + bubbleRect.width > window.innerWidth - gap) left = rect.left - bubbleRect.width - gap;
  if (left < gap) {
    left = Math.min(window.innerWidth - bubbleRect.width - gap, Math.max(gap, rect.left));
    top = rect.bottom + gap;
  }
  if (top + bubbleRect.height > window.innerHeight - gap) top = Math.max(gap, window.innerHeight - bubbleRect.height - gap);
  bubble.style.left = `${Math.max(gap, left)}px`;
  bubble.style.top = `${Math.max(gap, top)}px`;
}

function finishInterfaceTour(skipped = false) {
  if (!interfaceTourOpen) return;
  interfaceTourOpen = false;
  localStorage.setItem(interfaceTourSeenKey, "yes");
  document.getElementById("interface-tour").classList.remove("open");
  document.getElementById("interface-tour").setAttribute("aria-hidden", "true");
  document.body.classList.remove("tour-active");
  switchView(interfaceTourReturnView);
  showToast(skipped ? "Intro pominięte. Możesz wrócić do niego z menu." : "Oprowadzanie ukończone. Czas na krótki trening!");
}

function openTechniqueShow() {
  if (interfaceTourOpen) finishInterfaceTour(true);
  document.querySelector(".sidebar").classList.remove("open");
  techniqueSlideIndex = 0;
  techniqueShowOpen = true;
  const show = document.getElementById("technique-show");
  show.classList.add("open");
  show.setAttribute("aria-hidden", "false");
  document.body.classList.add("technique-show-active");
  renderTechniqueSlide();
}

function closeTechniqueShow() {
  techniqueShowOpen = false;
  const show = document.getElementById("technique-show");
  show.classList.remove("open");
  show.setAttribute("aria-hidden", "true");
  document.body.classList.remove("technique-show-active");
}

function renderTechniqueSlide() {
  const slide = techniqueSlides[techniqueSlideIndex];
  setText("technique-step-label", `${techniqueSlideIndex + 1} / ${techniqueSlides.length}`);
  setText("technique-slide-kicker", slide.kicker);
  setText("technique-slide-title", slide.title);
  setText("technique-slide-copy", slide.copy);
  document.getElementById("technique-slide-bullets").innerHTML = slide.bullets.map(item => `<li>${item}</li>`).join("");
  document.getElementById("technique-slide-visual").innerHTML = techniqueVisual(slide.visual);
  document.getElementById("technique-progress-bar").style.width = `${(techniqueSlideIndex + 1) / techniqueSlides.length * 100}%`;
  document.getElementById("technique-prev").disabled = techniqueSlideIndex === 0;
  setText("technique-next", techniqueSlideIndex === techniqueSlides.length - 1 ? "Zacznij trenować" : "Dalej");
}

function techniqueVisual(kind) {
  if (kind === "home") return `<div class="demo-hands"><div class="demo-hand left"><i></i><i></i><i></i><i class="anchor"></i></div><div class="demo-hand right"><i class="anchor"></i><i></i><i></i><i></i></div></div><div class="demo-key-row">${["A","S","D","F","J","K","L",";"].map(key => `<kbd class="${"FJ".includes(key) ? "anchor" : ""}">${key}<i></i></kbd>`).join("")}</div><strong class="visual-caption">Wyczuj wypustki F i J</strong>`;
  if (kind === "fingers") return `<div class="finger-map">${[["Q A Z","mały"],["W S X","serdeczny"],["E D C","środkowy"],["R F V · T G B","wskazujący"],["Y H N · U J M","wskazujący"],["I K ,","środkowy"],["O L .","serdeczny"],["P ; /","mały"]].map(([keys, name], i) => `<div style="--map-color:${fingerGroups[Math.min(i, i < 4 ? i : 7 - i)].color}"><b>${keys}</b><span>${name}</span></div>`).join("")}</div>`;
  if (kind === "rows") return `<div class="row-reach"><div><span>GÓRNY RZĄD</span><b>Q W E R T Y U I O P</b></div><i>↑ wróć ↓</i><div class="home"><span>BAZA</span><b>A S D F J K L ;</b></div><i>↓ wróć ↑</i><div><span>DOLNY RZĄD</span><b>Z X C V B N M</b></div></div>`;
  if (kind === "functions") return `<div class="function-keys"><kbd>Tab</kbd><kbd>Shift</kbd><kbd class="space">Spacja<br><small>kciuk</small></kbd><kbd>Enter</kbd><kbd>Backspace</kbd></div><div class="function-arrows"><span>lewy mały palec</span><span>prawy mały palec</span></div>`;
  if (kind === "eyes") return `<div class="screen-focus"><div class="demo-screen"><i></i><i></i><i></i><b>Patrz tutaj</b></div><div class="no-look"><div class="mini-board"></div><span></span><strong>Nie patrz w dół</strong></div></div>`;
  if (kind === "path") return `<div class="learning-path">${["Ułożenie dłoni","Pojedyncze palce","Rzędy klawiatury","Słowa i zdania","Gry i tempo"].map((label, i) => `<div><b>${i + 1}</b><span>${label}</span></div>`).join("")}</div>`;
  if (kind === "plan") return `<div class="daily-plan">${[["2","Pozycja"],["5","Lekcja"],["2","Gra"],["1","Test"]].map(([minutes, label]) => `<div><strong>${minutes}</strong><small>min</small><span>${label}</span></div>`).join("")}</div><strong class="visual-caption">10 minut · najlepiej 5 dni w tygodniu</strong>`;
  return `<div class="reward-demo"><div class="reward-orb"><span>✦</span><strong id="demo-sparks">${calculateSparks()}</strong><small>iskier treningu</small></div><div class="reward-cards"><div><span>Dzienny cel</span><strong>${progress.profile.dailyGoalMinutes || 10} min</strong></div><div><span>Poziom</span><strong>${Math.floor((progress.completed.length * 120 + Math.floor(progress.totalChars / 10)) / 500) + 1}</strong></div><div><span>Seria</span><strong>${Core.streakSummary(progress.activityDays).current} dni</strong></div></div></div>`;
}

function switchView(name) {
  if (activeView === "game" && name !== "game" && game.running) {
    stopCurrentGame();
    const overlay = document.getElementById("game-overlay");
    overlay.classList.remove("hidden");
    overlay.querySelector(".game-kicker").textContent = "GRA WSTRZYMANA";
    overlay.querySelector("h2").textContent = "Wróć do gry";
    overlay.querySelector("p").textContent = "Zmiana widoku zatrzymała rundę, aby żadna litera nie uciekła bez Ciebie.";
    document.getElementById("start-game").textContent = "Zacznij od nowa";
  }
  if (name !== "tutorial") document.getElementById("tutorial-complete").classList.remove("show");
  activeView = name;
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === `${name}-view`));
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === name));
  document.querySelector(".sidebar").classList.remove("open");
  if (name === "practice") document.getElementById("practice-text").focus();
  if (name === "tutorial") {
    renderTutorial();
    document.getElementById("tutorial-sequence").focus();
  }
  if (name === "speed") document.getElementById("speed-text").focus();
  if (name === "progress") renderProgress();
  syncActiveGuidance();
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach(item => item.addEventListener("click", () => switchView(item.dataset.view)));
  document.querySelector(".mobile-menu").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));
  document.getElementById("start-interface-tour").addEventListener("click", startInterfaceTour);
  document.getElementById("start-technique-show").addEventListener("click", openTechniqueShow);
  document.getElementById("tour-skip").addEventListener("click", () => finishInterfaceTour(true));
  document.getElementById("tour-back").addEventListener("click", () => {
    if (interfaceTourIndex > 0) {
      interfaceTourIndex -= 1;
      renderInterfaceTourStep();
    }
  });
  document.getElementById("tour-next").addEventListener("click", () => {
    if (interfaceTourIndex === interfaceTourSteps.length - 1) finishInterfaceTour();
    else {
      interfaceTourIndex += 1;
      renderInterfaceTourStep();
    }
  });
  document.getElementById("technique-show-close").addEventListener("click", closeTechniqueShow);
  document.getElementById("technique-prev").addEventListener("click", () => {
    if (techniqueSlideIndex > 0) {
      techniqueSlideIndex -= 1;
      renderTechniqueSlide();
    }
  });
  document.getElementById("technique-next").addEventListener("click", () => {
    if (techniqueSlideIndex === techniqueSlides.length - 1) {
      closeTechniqueShow();
      switchView("tutorial");
      showToast("Zacznij od wypustek F i J. Dokładność jest ważniejsza od tempa.");
    } else {
      techniqueSlideIndex += 1;
      renderTechniqueSlide();
    }
  });
  window.addEventListener("resize", () => {
    if (interfaceTourOpen) positionInterfaceTour(document.querySelector(interfaceTourSteps[interfaceTourIndex].selector));
  });
  window.addEventListener("scroll", () => {
    if (interfaceTourOpen) positionInterfaceTour(document.querySelector(interfaceTourSteps[interfaceTourIndex].selector));
  }, { passive: true });
  document.getElementById("lesson-track").addEventListener("click", e => {
    const node = e.target.closest("[data-lesson]");
    if (node) selectLesson(Number(node.dataset.lesson));
  });
  document.getElementById("restart-lesson").addEventListener("click", () => selectLesson(currentLesson));
  document.getElementById("restart-tutorial").addEventListener("click", () => selectTutorialStage(tutorialIndex));
  document.getElementById("skip-tutorial-stage").addEventListener("click", () => {
    const next = tutorialIndex === tutorialStages.length - 1 ? 0 : tutorialIndex + 1;
    selectTutorialStage(next);
    showToast(`Przejście do etapu ${next + 1}: ${tutorialStages[next].title}`);
  });
  document.getElementById("reset-tutorial").addEventListener("click", () => {
    if (!confirm("Czy zresetować wyłącznie postęp samouczka? Wyniki lekcji, gier i testów pozostaną bez zmian.")) return;
    progress.tutorialCompleted = [];
    saveProgress();
    selectTutorialStage(0);
    renderProgress();
    showToast("Postęp samouczka został zresetowany");
  });
  document.getElementById("tutorial-sequence").addEventListener("click", e => e.currentTarget.focus());
  document.getElementById("tutorial-steps").addEventListener("click", e => {
    const step = e.target.closest("[data-tutorial-stage]");
    if (step) selectTutorialStage(Number(step.dataset.tutorialStage));
  });
  document.getElementById("next-tutorial-stage").addEventListener("click", () => {
    const next = tutorialIndex === tutorialStages.length - 1 ? 0 : tutorialIndex + 1;
    selectTutorialStage(next);
  });
  document.getElementById("practice-text").addEventListener("click", e => e.currentTarget.focus());
  document.getElementById("speed-text").addEventListener("click", e => e.currentTarget.focus());
  document.getElementById("start-game").addEventListener("click", startGame);
  document.getElementById("game-library").addEventListener("click", event => {
    const button = event.target.closest("[data-game-mode]");
    if (button) selectGameMode(button.dataset.gameMode);
  });
  document.getElementById("start-speed").addEventListener("click", () => speed.ended ? resetSpeed() : startSpeed());
  document.querySelectorAll("[data-duration]").forEach(button => button.addEventListener("click", () => {
    speedDuration = Number(button.dataset.duration);
    document.querySelectorAll("[data-duration]").forEach(b => b.classList.toggle("active", b === button));
    resetSpeed();
  }));
  document.querySelector(".sound-toggle").addEventListener("click", e => {
    soundOn = !soundOn;
    localStorage.setItem("mok-sound", soundOn ? "on" : "off");
    updateSoundControl();
    if (soundOn) feedbackSound("correct");
  });
  document.querySelectorAll(".theme-picker [data-theme]").forEach(button => button.addEventListener("click", () => applyTheme(button.dataset.theme)));
  ["profile-platform", "profile-goal", "profile-daily-goal"].forEach(id => document.getElementById(id).addEventListener("change", () => {
    saveProfile(
      document.getElementById("profile-platform").value,
      document.getElementById("profile-goal").value,
      document.getElementById("profile-daily-goal").value
    );
    showToast("Profil treningowy został zapisany");
  }));
  document.getElementById("save-profile").addEventListener("click", () => {
    saveProfile(
      document.getElementById("onboarding-platform").value,
      document.getElementById("onboarding-goal").value,
      document.getElementById("onboarding-daily-goal").value
    );
    closeProfileModal();
    showToast("Profil gotowy. Zaczynamy trening!");
    if (localStorage.getItem(interfaceTourSeenKey) !== "yes") setTimeout(startInterfaceTour, 450);
  });
  document.querySelector(".modal-close").addEventListener("click", closeModal);
  document.getElementById("next-lesson").addEventListener("click", () => {
    closeModal();
    selectLesson((currentLesson + 1) % lessons.length);
  });
  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!confirm("Czy na pewno chcesz usunąć wszystkie zapisane wyniki?")) return;
    const profile = { ...progress.profile };
    progress = Core.createDefaultProgress();
    progress.profile = profile;
    saveProgress(); renderProgress(); buildLessonTrack(); showToast("Wyniki zostały wyczyszczone");
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && interfaceTourOpen) {
      finishInterfaceTour(true);
      return;
    }
    if (event.key === "Escape" && techniqueShowOpen) {
      closeTechniqueShow();
      return;
    }
    if (interfaceTourOpen || techniqueShowOpen || document.getElementById("profile-modal").classList.contains("open")) return;
    if (document.getElementById("result-modal").classList.contains("open")) return;
    if (activeView === "practice") handleTyping(event, practice, "practice");
    else if (activeView === "tutorial") handleTutorial(event);
    else if (activeView === "speed") handleTyping(event, speed, "speed");
    else if (activeView === "game") {
      if (!game.running) return;
      if (event.key === " ") event.preventDefault();
      const mode = currentGameMode();
      if (mode.id === "memory" && game.memoryVisible) return;
      const correct = mode.type === "falling"
        ? game.items.some(item => item.char === event.key.toLowerCase())
        : !game.memoryVisible && game.target[game.index]?.toLocaleLowerCase("pl-PL") === event.key.toLocaleLowerCase("pl-PL");
      if (event.key.length === 1) flashKey(event.code, correct);
      if (mode.type === "falling") hitGameLetter(event.key);
      else handleArcadeKey(event.key);
    }
    else flashKey(event.code);
  });
}

function updateSoundControl() {
  const button = document.querySelector(".sound-toggle");
  button.classList.toggle("muted", !soundOn);
  button.setAttribute("aria-pressed", String(soundOn));
  button.setAttribute("aria-label", soundOn ? "Wyłącz dźwięki" : "Włącz dźwięki");
  button.title = soundOn ? "Wyłącz dźwięki" : "Włącz dźwięki";
  setText("sound-status", soundOn ? "Dźwięki włączone" : "Dźwięki wyłączone");
}

function applyTheme(theme) {
  activeTheme = ["dark", "dusk", "neon", "light", "cream", "sky"].includes(theme) ? theme : "dark";
  document.body.dataset.theme = activeTheme;
  localStorage.setItem("mok-theme", activeTheme);
  document.querySelectorAll(".theme-picker [data-theme]").forEach(button => button.classList.toggle("active", button.dataset.theme === activeTheme));
}

function updateDaily() {
  const streak = Core.streakSummary(progress.activityDays);
  const goalMinutes = progress.profile.dailyGoalMinutes || 10;
  const minutes = Math.floor(streak.todaySeconds / 60);
  const percent = Math.min(100, Math.round(streak.todaySeconds / (goalMinutes * 60) * 100));
  setText("daily-minutes", minutes);
  setText("daily-goal-minutes", goalMinutes);
  setText("daily-percent", `${percent}%`);
  document.querySelector(".daily-ring").style.setProperty("--progress", `${percent * 3.6}deg`);
  setText("streak-days", streak.current);
}

function calculateSparks() {
  const gameSessions = (progress.sessions || []).filter(session => session.kind === "game").length;
  return progress.completed.length * 40 + progress.tutorialCompleted.length * 25 + Math.floor(progress.totalChars / 20) + gameSessions * 15;
}

function updateRewards() {
  setText("focus-points", calculateSparks());
}

async function loadVisitorCount() {
  const isPublicPage = location.hostname.toLowerCase() === "margib.github.io";
  const shouldIncrement = isPublicPage && localStorage.getItem(visitorCountedKey) !== "yes";
  const endpoint = shouldIncrement ? `${visitorCounterBaseUrl}/up` : `${visitorCounterBaseUrl}/`;

  try {
    const response = await fetch(endpoint, { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`Counter returned ${response.status}`);
    const data = await response.json();
    const count = Number(data.count);
    if (!Number.isFinite(count)) throw new Error("Counter returned an invalid value");
    setText("visitor-count", visitorCountLabel(count));
    if (shouldIncrement) localStorage.setItem(visitorCountedKey, "yes");
  } catch {
    setText("visitor-count", "Wiele osób sprawdziło aplikację");
  }
}

function visitorCountLabel(count) {
  const lastTwo = count % 100;
  const last = count % 10;
  const formatted = new Intl.NumberFormat("pl-PL").format(count);
  if (count === 1) return `${formatted} osoba sprawdziła aplikację`;
  if (last >= 2 && last <= 4 && !(lastTwo >= 12 && lastTwo <= 14)) return `${formatted} osoby sprawdziły aplikację`;
  return `${formatted} osób sprawdziło aplikację`;
}

function tone(frequency, duration) {
  if (!soundOn) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
    gain.gain.setValueAtTime(.025, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch {}
}

function feedbackSound(type) {
  if (!soundOn) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    const frequencies = type === "correct" ? [520, 660] : [155, 118];
    frequencies.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = type === "correct" ? "sine" : "triangle";
      oscillator.frequency.setValueAtTime(frequency, now + index * .025);
      if (type === "wrong") oscillator.frequency.exponentialRampToValueAtTime(Math.max(80, frequency * .72), now + .13);
      gain.gain.setValueAtTime(type === "correct" ? .018 : .028, now + index * .025);
      gain.gain.exponentialRampToValueAtTime(.0001, now + (type === "correct" ? .09 : .16));
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start(now + index * .025);
      oscillator.stop(now + (type === "correct" ? .1 : .17));
    });
  } catch {}
}

function closeModal() {
  const modal = document.getElementById("result-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function setText(id, value) { document.getElementById(id).textContent = value; }
function formatTime(seconds) { return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`; }
function formatDuration(seconds) {
  const value = Math.max(0, Number(seconds) || 0);
  if (!value) return "—";
  if (value < 60) return `${value} s`;
  return `${Math.floor(value / 60)} min ${value % 60 ? `${value % 60} s` : ""}`.trim();
}
function escapeHtml(char) { return char.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[c]); }

init();
