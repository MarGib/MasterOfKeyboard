(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.MOKCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const DATA_VERSION = 2;
  const DEFAULT_PROFILE = {
    platform: "",
    goal: "",
    dailyGoalMinutes: 10,
    configured: false
  };

  function number(value, fallback = 0) {
    return Number.isFinite(Number(value)) ? Number(value) : fallback;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function dayKey(input = new Date()) {
    const date = input instanceof Date ? input : new Date(input);
    const safeDate = Number.isNaN(date.getTime()) ? new Date() : date;
    const year = safeDate.getFullYear();
    const month = String(safeDate.getMonth() + 1).padStart(2, "0");
    const day = String(safeDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function shiftDay(key, amount) {
    const [year, month, day] = key.split("-").map(Number);
    const date = new Date(year, month - 1, day + amount, 12);
    return dayKey(date);
  }

  function createDefaultProgress(now = new Date()) {
    const timestamp = new Date(now).toISOString();
    return {
      version: DATA_VERSION,
      completed: [],
      tutorialCompleted: [],
      sessions: [],
      totalChars: 0,
      totalCorrectChars: 0,
      totalSeconds: 0,
      bestWpm: 0,
      keyHits: {},
      keyMisses: {},
      activityDays: {},
      profile: { ...DEFAULT_PROFILE },
      createdAt: timestamp,
      updatedAt: timestamp
    };
  }

  function sessionKind(type = "") {
    const value = String(type);
    if (value.startsWith("Gra")) return "game";
    if (value === "Test") return "speed-test";
    if (value === "Samouczek") return "tutorial";
    return "lesson";
  }

  function migrateSession(session, index = 0) {
    const kind = session.kind || sessionKind(session.type);
    const endedAt = session.endedAt || session.date || null;
    const durationSeconds = number(session.durationSeconds, 0) || null;
    const typedChars = number(session.typedChars, number(session.attempts, 0));
    const correctChars = number(session.correctChars, Math.max(0, typedChars - number(session.errors, 0)));
    const attempts = number(session.attempts, typedChars);
    const errors = number(session.errors, Math.max(0, attempts - correctChars));
    const accuracy = Number.isFinite(Number(session.accuracy))
      ? clamp(Math.round(Number(session.accuracy)), 0, 100)
      : attempts ? clamp(Math.round(correctChars / attempts * 100), 0, 100) : 0;
    const typingKind = kind === "lesson" || kind === "speed-test";

    return {
      id: session.id || `legacy-${endedAt || "session"}-${index}`,
      kind,
      label: session.label || session.type || "Sesja",
      startedAt: session.startedAt || null,
      endedAt,
      durationSeconds,
      typedChars,
      correctChars,
      attempts,
      errors,
      corrections: number(session.corrections, 0),
      accuracy,
      wpm: typingKind && Number.isFinite(Number(session.wpm)) ? Math.max(0, Math.round(Number(session.wpm))) : null,
      cpm: typingKind && Number.isFinite(Number(session.cpm)) ? Math.max(0, Math.round(Number(session.cpm))) : null,
      score: kind === "game" ? number(session.score, 0) : null,
      level: kind === "game" ? number(session.level, 0) : null
    };
  }

  function migrateProgress(raw, now = new Date()) {
    const base = createDefaultProgress(now);
    const source = raw && typeof raw === "object" ? raw : {};
    const sessions = Array.isArray(source.sessions) ? source.sessions.map(migrateSession) : [];
    const activityDays = source.activityDays && typeof source.activityDays === "object" ? { ...source.activityDays } : {};
    const legacyDailySeconds = number(source.dailySeconds, 0);
    if (legacyDailySeconds > 0 && !activityDays[dayKey(now)]) activityDays[dayKey(now)] = legacyDailySeconds;
    const sourceProfile = source.profile && typeof source.profile === "object" ? source.profile : {};
    const profile = {
      ...DEFAULT_PROFILE,
      ...sourceProfile,
      dailyGoalMinutes: clamp(number(sourceProfile.dailyGoalMinutes, 10), 5, 60)
    };
    profile.configured = Boolean(profile.configured && profile.platform && profile.goal);

    const progress = {
      ...base,
      ...source,
      version: DATA_VERSION,
      completed: Array.isArray(source.completed) ? [...new Set(source.completed.map(Number).filter(Number.isFinite))] : [],
      tutorialCompleted: Array.isArray(source.tutorialCompleted) ? [...new Set(source.tutorialCompleted.map(Number).filter(Number.isFinite))] : [],
      sessions,
      totalChars: Math.max(0, number(source.totalChars, 0)),
      totalCorrectChars: Math.max(0, number(source.totalCorrectChars, source.totalChars || 0)),
      totalSeconds: Math.max(0, number(source.totalSeconds, 0)),
      keyHits: source.keyHits && typeof source.keyHits === "object" ? { ...source.keyHits } : {},
      keyMisses: source.keyMisses && typeof source.keyMisses === "object" ? { ...source.keyMisses } : {},
      activityDays,
      profile,
      createdAt: source.createdAt || base.createdAt,
      updatedAt: new Date(now).toISOString()
    };
    progress.bestWpm = summarizeSessions(sessions).bestWpm;
    delete progress.day;
    delete progress.dailySeconds;
    return progress;
  }

  function calculateTypingMetrics(session, now = Date.now()) {
    const started = number(session.started, 0);
    const durationSeconds = started ? Math.max(0, (number(now, Date.now()) - started) / 1000) : 0;
    const minutes = durationSeconds / 60;
    const correctChars = Math.max(0, number(session.correct, 0));
    const attempts = Math.max(0, number(session.attempts, Array.isArray(session.typed) ? session.typed.length : session.index || 0));
    const correctKeystrokes = Math.max(0, number(session.correctKeystrokes, correctChars));
    const enoughSample = durationSeconds >= 3 && correctChars >= 5;
    return {
      durationSeconds: Math.round(durationSeconds),
      wpm: enoughSample && minutes ? Math.max(0, Math.round((correctChars / 5) / minutes)) : 0,
      cpm: enoughSample && minutes ? Math.max(0, Math.round(correctChars / minutes)) : 0,
      accuracy: attempts ? clamp(Math.round(correctKeystrokes / attempts * 100), 0, 100) : 100,
      attempts,
      correctChars,
      errors: Math.max(0, number(session.incorrectKeystrokes, session.errors || 0)),
      corrections: Math.max(0, number(session.corrections, 0))
    };
  }

  function makeSessionRecord(options) {
    const endedAt = options.endedAt ? new Date(options.endedAt) : new Date();
    const durationSeconds = Math.max(0, number(options.durationSeconds, 0));
    const attempts = Math.max(0, number(options.attempts, 0));
    const correctChars = Math.max(0, number(options.correctChars, 0));
    const errors = Math.max(0, number(options.errors, attempts - correctChars));
    return migrateSession({
      id: options.id || `${endedAt.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
      kind: options.kind,
      label: options.label,
      startedAt: options.startedAt || (durationSeconds ? new Date(endedAt.getTime() - durationSeconds * 1000).toISOString() : null),
      endedAt: endedAt.toISOString(),
      durationSeconds,
      typedChars: number(options.typedChars, attempts),
      correctChars,
      attempts,
      errors,
      corrections: number(options.corrections, 0),
      accuracy: options.accuracy,
      wpm: options.wpm,
      cpm: options.cpm,
      score: options.score,
      level: options.level
    });
  }

  function isQualifiedWpmSession(session) {
    return session.kind === "speed-test"
      && Number.isFinite(Number(session.wpm))
      && number(session.durationSeconds, 0) >= 15
      && number(session.correctChars, 0) >= 20
      && number(session.accuracy, 0) >= 85;
  }

  function summarizeSessions(sessions = []) {
    const normalized = sessions.map(migrateSession);
    const accuracySessions = normalized.filter(session => Number.isFinite(Number(session.accuracy)));
    const qualified = normalized.filter(isQualifiedWpmSession);
    return {
      totalSessions: normalized.length,
      typingSessions: normalized.filter(session => session.kind === "lesson" || session.kind === "speed-test"),
      accuracy: accuracySessions.length
        ? Math.round(accuracySessions.reduce((sum, session) => sum + session.accuracy, 0) / accuracySessions.length)
        : 0,
      bestWpm: qualified.length ? Math.max(...qualified.map(session => session.wpm)) : 0
    };
  }

  function recordActivity(progress, seconds, when = new Date()) {
    const duration = Math.max(0, Math.round(number(seconds, 0)));
    if (!duration) return progress;
    const key = dayKey(when);
    progress.activityDays ||= {};
    progress.activityDays[key] = number(progress.activityDays[key], 0) + duration;
    progress.totalSeconds = number(progress.totalSeconds, 0) + duration;
    progress.updatedAt = new Date(when).toISOString();
    return progress;
  }

  function streakSummary(activityDays = {}, now = new Date()) {
    const active = new Set(Object.entries(activityDays).filter(([, seconds]) => number(seconds, 0) > 0).map(([key]) => key));
    const today = dayKey(now);
    let cursor = active.has(today) ? today : shiftDay(today, -1);
    let current = 0;
    while (active.has(cursor)) {
      current++;
      cursor = shiftDay(cursor, -1);
    }

    const sorted = [...active].sort();
    let longest = 0;
    let run = 0;
    let previous = null;
    sorted.forEach(key => {
      run = previous && shiftDay(previous, 1) === key ? run + 1 : 1;
      longest = Math.max(longest, run);
      previous = key;
    });
    return { current, longest, todaySeconds: number(activityDays[today], 0), activeDays: active.size };
  }

  return {
    DATA_VERSION,
    DEFAULT_PROFILE,
    createDefaultProgress,
    migrateProgress,
    migrateSession,
    calculateTypingMetrics,
    makeSessionRecord,
    isQualifiedWpmSession,
    summarizeSessions,
    recordActivity,
    streakSummary,
    dayKey
  };
});
