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

const defaultProgress = { completed: [], tutorialCompleted: [], sessions: [], totalChars: 0, totalSeconds: 0, bestWpm: 0, keyHits: {}, keyMisses: {}, day: new Date().toDateString(), dailySeconds: 0 };
let progress = loadProgress();
let activeView = "practice";
let currentLesson = Math.min(progress.completed.length, lessons.length - 1);
let practice = freshSession(lessons[currentLesson].text);
let tutorialIndex = Math.min(progress.tutorialCompleted.length, tutorialStages.length - 1);
let tutorial = freshTutorialSession(tutorialStages[tutorialIndex].text);
let speed = freshSession(speedTexts[0]);
let speedDuration = 30;
let speedTimer = null;
let game = freshGameState(false);
let soundOn = localStorage.getItem("mok-sound") !== "off";
let audioContext;
let activeTheme = localStorage.getItem("mok-theme") || "dark";

function loadProgress() {
  try { return { ...defaultProgress, ...JSON.parse(localStorage.getItem("mok-progress") || "{}") }; }
  catch { return { ...defaultProgress }; }
}

function saveProgress() {
  if (progress.day !== new Date().toDateString()) {
    progress.day = new Date().toDateString();
    progress.dailySeconds = 0;
  }
  localStorage.setItem("mok-progress", JSON.stringify(progress));
  updateDaily();
}

function freshSession(text) {
  return { text, index: 0, typed: [], errors: 0, correct: 0, streak: 0, bestStreak: 0, started: 0, ended: false };
}

function freshTutorialSession(text) {
  return { text, index: 0, typed: [], attempts: 0, errors: 0, correct: 0, ended: false };
}

function init() {
  applyTheme(activeTheme);
  updateSoundControl();
  buildKeyboards();
  buildLessonTrack();
  buildLegend();
  renderPractice();
  renderTutorial();
  resetSpeed();
  renderProgress();
  bindEvents();
  updateDaily();
  document.getElementById("practice-text").focus();
}

function buildKeyboards() {
  document.querySelectorAll("[data-keyboard]").forEach(board => {
    board.innerHTML = rows.map(row => `<div class="key-row">${row.map(([label, code, cls = ""]) => {
      const color = fingerFor(label.length === 1 ? label.toLowerCase() : label === "Spacja" ? " " : "").color;
      return `<span class="key ${cls}" data-code="${code}" data-color="${color}" style="--key-color:${color}">${label}</span>`;
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
  progress.totalChars += tutorial.correct;
  progress.sessions.push({ type: "Samouczek", wpm: 0, accuracy, date: new Date().toISOString() });
  progress.sessions = progress.sessions.slice(-12);
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
  const elapsed = session.started ? Math.max((Date.now() - session.started) / 60000, 1 / 60) : 0;
  return {
    wpm: elapsed ? Math.round((session.correct / 5) / elapsed) : 0,
    cpm: elapsed ? Math.round(session.correct / elapsed) : 0,
    accuracy: session.index ? Math.max(0, Math.round(session.correct / session.index * 100)) : 100
  };
}

function handleTyping(event, session, mode) {
  if (event.metaKey || session.ended || ((event.ctrlKey || event.altKey) && event.key.length !== 1)) return;
  if (event.key === "Backspace") {
    event.preventDefault();
    if (session.index > 0) {
      session.index--;
      session.typed.pop();
      session.correct = session.typed.reduce((sum, char, i) => sum + (char === session.text[i] ? 1 : 0), 0);
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
  session.typed.push(event.key);
  session.index++;
  if (correct) {
    session.correct++;
    session.streak++;
    session.bestStreak = Math.max(session.bestStreak, session.streak);
    progress.keyHits[expected.toLowerCase()] = (progress.keyHits[expected.toLowerCase()] || 0) + 1;
    feedbackSound("correct");
  } else {
    session.errors++;
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
  progress.totalChars += practice.index;
  progress.totalSeconds += seconds;
  progress.dailySeconds += seconds;
  progress.bestWpm = Math.max(progress.bestWpm, metrics.wpm);
  if (!progress.completed.includes(currentLesson)) progress.completed.push(currentLesson);
  progress.sessions.push({ type: "Lekcja", wpm: metrics.wpm, accuracy: metrics.accuracy, date: new Date().toISOString() });
  progress.sessions = progress.sessions.slice(-12);
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
  progress.totalChars += speed.index;
  progress.totalSeconds += speedDuration;
  progress.dailySeconds += speedDuration;
  progress.bestWpm = Math.max(progress.bestWpm, metrics.wpm);
  progress.sessions.push({ type: "Test", wpm: metrics.wpm, accuracy: metrics.accuracy, date: new Date().toISOString() });
  progress.sessions = progress.sessions.slice(-12);
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

function freshGameState(running = true) {
  return { running, score: 0, lives: 3, level: 1, levelHits: 0, hits: 0, misses: 0, combo: 0, pace: .32, targetPace: .32, items: [], activeTarget: null, lastSpawn: 0, lastFrame: 0, raf: null };
}

function startGame() {
  game.items.forEach(item => item.el.remove());
  game = freshGameState(true);
  game.lastSpawn = performance.now() - 1700;
  document.getElementById("game-overlay").classList.add("hidden");
  updateGameHud();
  game.raf = requestAnimationFrame(gameLoop);
}

function gameLoop(now) {
  if (!game.running) return;
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
    item.y += item.speed * game.pace * frameScale;
    const growth = 1 + Math.min(.38, item.y / Math.max(1, lineY) * .38) + (item === game.activeTarget ? .12 : 0);
    item.el.style.transform = `translateY(${item.y}px) rotate(${Math.sin(item.y / 35) * 3}deg) scale(${growth})`;
    if (item.y + 56 >= lineY) missLetter(item);
  });
  updateGameTarget();
  updateSpeedometer();
  game.raf = requestAnimationFrame(gameLoop);
}

function spawnLetter(stage) {
  const chars = gameLevelSets[Math.min(gameLevelSets.length - 1, Math.floor((game.level - 1) / 2))];
  const char = chars[Math.floor(Math.random() * chars.length)];
  const group = fingerFor(char);
  const el = document.createElement("div");
  el.className = "fall-key";
  el.textContent = char.toUpperCase();
  const startX = stage.clientWidth > 760 ? 360 : 20;
  el.style.left = `${startX + Math.random() * Math.max(10, stage.clientWidth - startX - 76)}px`;
  el.style.top = "4px";
  el.style.setProperty("--fall-color", group.color);
  stage.appendChild(el);
  game.items.push({ char, el, y: 0, speed: 1.05 + Math.random() * .2 });
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
  const nextTarget = game.items.slice().sort((a, b) => b.y - a.y)[0] || null;
  if (nextTarget === game.activeTarget) return;
  game.items.forEach(item => item.el.classList.toggle("urgent", item === nextTarget));
  game.activeTarget = nextTarget;
  if (!nextTarget) {
    setText("game-finger", "Czekam na literę");
    highlightExpected("");
    highlightFinger("");
    return;
  }
  const group = fingerFor(nextTarget.char);
  setText("game-finger", `${nextTarget.char.toUpperCase()} · ${fingerNameFor(nextTarget.char)}`);
  highlightExpected(nextTarget.char);
  highlightFinger(nextTarget.char);
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
  game.running = false;
  cancelAnimationFrame(game.raf);
  const overlay = document.getElementById("game-overlay");
  overlay.classList.remove("hidden");
  overlay.querySelector(".game-kicker").textContent = "KONIEC GRY";
  overlay.querySelector("h2").textContent = `${game.score} punktów`;
  overlay.querySelector("p").textContent = `Dotarłeś do poziomu ${game.level} i tempa ${game.pace.toFixed(1)}×. Jeszcze jedna próba?`;
  document.getElementById("start-game").textContent = "Zagraj ponownie";
  progress.sessions.push({ type: "Gra", wpm: Math.round(game.score / 10), accuracy: Math.max(0, 100 - (3 - game.lives) * 10), date: new Date().toISOString() });
  progress.sessions = progress.sessions.slice(-12);
  saveProgress();
}

function updateGameHud() {
  setText("game-score", game.score);
  setText("game-level", game.level);
  setText("game-level-stage", game.level);
  setText("game-combo", game.combo);
  setText("game-lives", game.lives);
  setText("game-level-copy", gameLevelNames[game.level - 1]);
  const levelHits = Math.min(10, game.levelHits);
  setText("game-level-hits", game.level === 10 ? "Poziom mistrzowski" : `${levelHits} / 10 trafień`);
  document.getElementById("game-level-progress").style.width = `${levelHits * 10}%`;
  updateSpeedometer();
}

function updateSpeedometer() {
  const percent = Math.max(0, Math.min(100, (game.pace - .28) / (2.35 - .28) * 100));
  document.getElementById("speedometer-needle").style.setProperty("--speed-angle", `${-82 + percent * 164}deg`);
  setText("game-speed", `${game.pace.toFixed(1)}×`);
  setText("game-speed-name", percent < 18 ? "Rozgrzewka" : percent < 40 ? "Spokojnie" : percent < 65 ? "Dobre tempo" : percent < 85 ? "Szybko" : "Turbo");
}

function renderProgress() {
  const sessions = progress.sessions || [];
  const avg = sessions.length ? Math.round(sessions.reduce((sum, s) => sum + s.accuracy, 0) / sessions.length) : 0;
  const xp = progress.completed.length * 120 + Math.floor(progress.totalChars / 10);
  const level = Math.floor(xp / 500) + 1;
  setText("profile-level", level);
  setText("profile-xp", `${xp} XP`);
  setText("best-wpm", progress.bestWpm || 0);
  setText("completed-lessons", progress.completed.length);
  setText("total-chars", progress.totalChars.toLocaleString("pl-PL"));
  setText("avg-accuracy", avg);
  setText("total-minutes", Math.round(progress.totalSeconds / 60));
  document.getElementById("xp-bar").style.width = `${xp % 500 / 5}%`;
  document.getElementById("progress-message").textContent = progress.completed.length
    ? `Masz ukończone ${progress.completed.length} z ${lessons.length} lekcji. Utrzymaj rytm i wróć jutro.`
    : "Ukończ pierwszą lekcję, aby zobaczyć swój rozwój.";
  renderChart(sessions);
  renderMastery();
}

function renderChart(sessions) {
  const chart = document.getElementById("history-chart");
  if (!sessions.length) {
    chart.innerHTML = `<span class="empty-chart">Pierwszy wykres pojawi się po ukończeniu ćwiczenia.</span>`;
    return;
  }
  const max = Math.max(40, ...sessions.map(s => s.wpm));
  chart.innerHTML = sessions.slice(-10).map((s, i) => `<div class="chart-col"><i class="chart-bar" data-value="${s.wpm}" style="height:${Math.max(4, s.wpm / max * 100)}%"></i><small>${i + 1}</small></div>`).join("");
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

function switchView(name) {
  if (activeView === "game" && name !== "game" && game.running) {
    game.running = false;
    cancelAnimationFrame(game.raf);
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
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach(item => item.addEventListener("click", () => switchView(item.dataset.view)));
  document.querySelector(".mobile-menu").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));
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
  document.querySelector(".modal-close").addEventListener("click", closeModal);
  document.getElementById("next-lesson").addEventListener("click", () => {
    closeModal();
    selectLesson((currentLesson + 1) % lessons.length);
  });
  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!confirm("Czy na pewno chcesz usunąć wszystkie zapisane wyniki?")) return;
    progress = { ...defaultProgress, completed: [], sessions: [], keyHits: {}, keyMisses: {} };
    saveProgress(); renderProgress(); buildLessonTrack(); showToast("Wyniki zostały wyczyszczone");
  });
  document.addEventListener("keydown", event => {
    if (document.getElementById("result-modal").classList.contains("open")) return;
    if (activeView === "practice") handleTyping(event, practice, "practice");
    else if (activeView === "tutorial") handleTutorial(event);
    else if (activeView === "speed") handleTyping(event, speed, "speed");
    else if (activeView === "game") {
      flashKey(event.code, game.items.some(item => item.char === event.key.toLowerCase()));
      hitGameLetter(event.key);
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
  activeTheme = ["dark", "dusk", "light", "neon"].includes(theme) ? theme : "dark";
  document.body.dataset.theme = activeTheme;
  localStorage.setItem("mok-theme", activeTheme);
  document.querySelectorAll(".theme-picker [data-theme]").forEach(button => button.classList.toggle("active", button.dataset.theme === activeTheme));
}

function updateDaily() {
  const minutes = Math.min(10, Math.floor((progress.dailySeconds || 0) / 60));
  const percent = Math.min(100, Math.round((progress.dailySeconds || 0) / 600 * 100));
  setText("daily-minutes", minutes);
  setText("daily-percent", `${percent}%`);
  document.querySelector(".daily-ring").style.setProperty("--progress", `${percent * 3.6}deg`);
  setText("streak-days", progress.totalSeconds > 0 ? 1 : 0);
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
function escapeHtml(char) { return char.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[c]); }

init();
