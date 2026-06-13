const test = require("node:test");
const assert = require("node:assert/strict");
const core = require("../MasterOfKeyboard/core.js");

test("calculates WPM and accuracy from all keystrokes, including corrected errors", () => {
  const session = {
    started: 1_000,
    correct: 50,
    attempts: 55,
    correctKeystrokes: 50,
    incorrectKeystrokes: 5,
    corrections: 3
  };
  const metrics = core.calculateTypingMetrics(session, 61_000);
  assert.equal(metrics.wpm, 10);
  assert.equal(metrics.cpm, 50);
  assert.equal(metrics.accuracy, 91);
  assert.equal(metrics.corrections, 3);
});

test("does not show misleading WPM from the first few keystrokes", () => {
  const metrics = core.calculateTypingMetrics({
    started: 1_000,
    correct: 1,
    attempts: 1,
    correctKeystrokes: 1
  }, 1_050);
  assert.equal(metrics.wpm, 0);
  assert.equal(metrics.cpm, 0);
  assert.equal(metrics.accuracy, 100);
});

test("migrates legacy progress without losing lessons or sessions", () => {
  const migrated = core.migrateProgress({
    completed: [0, 1],
    sessions: [{ type: "Gra: Deszcz liter", wpm: 94, accuracy: 80, date: "2026-06-10T10:00:00.000Z" }],
    totalChars: 400,
    dailySeconds: 120
  }, new Date(2026, 5, 13, 12));
  assert.equal(migrated.version, 2);
  assert.deepEqual(migrated.completed, [0, 1]);
  assert.equal(migrated.sessions[0].kind, "game");
  assert.equal(migrated.sessions[0].wpm, null);
  assert.equal(migrated.totalCorrectChars, 400);
  assert.equal(migrated.activityDays["2026-06-13"], 120);
});

test("calculates current and longest real training streak", () => {
  const activity = {
    "2026-06-08": 60,
    "2026-06-09": 60,
    "2026-06-10": 60,
    "2026-06-12": 60,
    "2026-06-13": 60
  };
  const streak = core.streakSummary(activity, new Date(2026, 5, 13, 18));
  assert.deepEqual(streak, { current: 2, longest: 3, todaySeconds: 60, activeDays: 5 });
});

test("keeps a streak active before today's first training", () => {
  const streak = core.streakSummary({ "2026-06-11": 60, "2026-06-12": 60 }, new Date(2026, 5, 13, 8));
  assert.equal(streak.current, 2);
});

test("best WPM ignores games, tutorials and very short sessions", () => {
  const sessions = [
    core.makeSessionRecord({ kind: "game", label: "Gra", score: 900, accuracy: 100 }),
    core.makeSessionRecord({ kind: "lesson", label: "Krótka lekcja", durationSeconds: 4, correctChars: 40, attempts: 40, accuracy: 100, wpm: 120 }),
    core.makeSessionRecord({ kind: "speed-test", label: "Test", durationSeconds: 30, correctChars: 100, attempts: 104, accuracy: 96, wpm: 40 })
  ];
  assert.equal(core.summarizeSessions(sessions).bestWpm, 40);
});

test("records daily activity and total time", () => {
  const progress = core.createDefaultProgress(new Date(2026, 5, 13, 10));
  core.recordActivity(progress, 95, new Date(2026, 5, 13, 11));
  core.recordActivity(progress, 25, new Date(2026, 5, 13, 12));
  assert.equal(progress.totalSeconds, 120);
  assert.equal(progress.activityDays["2026-06-13"], 120);
});

test("detects the finger movement direction for keyboard rows", () => {
  assert.equal(core.fingerDirection("Q"), "up");
  assert.equal(core.fingerDirection("Ć"), "down");
  assert.equal(core.fingerDirection("A"), "");
  assert.equal(core.fingerDirection("Ł"), "");
  assert.equal(core.fingerDirection(" "), "");
});
