const generateId = () => Math.random().toString(36).substr(2, 9);
const players = [];
const text = "1. Renato\n2. Joao\n3. Maria";
const lines = text.split("\n");
const newPlayers = [];
const existingPlayerIdsToUpdate = [];

const ignorePatterns = [
  /\d{1,2}[\/\-]\d{1,2}/, // Dates
  /\d{1,2}:\d{2}/, // Times
  /^(lista|jogadores|convocados|presença|confirmados|futebol|pelada|horário|data|local|valor)/i, // Titles
  /^\s*$/, // Empty lines
];

const existingNamesMap = new Map(players.map((p) => [p.name.toLowerCase(), p]));

lines.forEach((line, i) => {
  let name = line.replace(/^[\d\.\-\*\•\s]+/, "").trim();
  const shouldIgnore = ignorePatterns.some((pattern) => pattern.test(name));
  
  if (name && name.length > 1 && !shouldIgnore) {
    const lowerName = name.toLowerCase();
    if (existingNamesMap.has(lowerName)) {
      const existing = existingNamesMap.get(lowerName);
      if (existing && existing.id !== "new") {
        existingPlayerIdsToUpdate.push(existing.id);
        existingNamesMap.set(lowerName, { id: "new" });
      }
    } else {
      newPlayers.push({
        id: generateId(),
        name,
        goals: 0,
        assists: 0,
        isAvailable: true,
        arrivedAt: Date.now() + i,
        stars: 3,
        addedVia: "whatsapp",
      });
      existingNamesMap.set(lowerName, { id: "new" });
    }
  }
});

console.log(newPlayers);
