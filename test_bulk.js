const players = [{ id: '1', name: 'renato', isAvailable: false }];
const text = "1. Renato\n2. Joao";
const lines = text.split("\n");
const newPlayers = [];
const existingPlayersToUpdate = [];

const ignorePatterns = [
  /\d{1,2}[\/\-]\d{1,2}/, // Dates
  /\d{1,2}:\d{2}/, // Times
  /^(lista|jogadores|convocados|presença|confirmados|futebol|pelada|horário|data|local|valor)/i, // Titles
  /^\s*$/, // Empty lines
];

const existingNamesMap = new Map(players.map((p) => [p.name.toLowerCase(), p]));

lines.forEach((line, i) => {
  // Better regex: remove leading numbers, dots, hyphens, asterisks, spaces
  let name = line.replace(/^[\d\.\-\*\•\s]+/, "").trim();

  const shouldIgnore = ignorePatterns.some((pattern) => pattern.test(name));
  
  if (name && name.length > 1 && !shouldIgnore) {
    const lowerName = name.toLowerCase();
    if (existingNamesMap.has(lowerName)) {
      const existing = existingNamesMap.get(lowerName);
      existingPlayersToUpdate.push(existing);
      // Remove from map to avoid duplicates in the same paste
      existingNamesMap.delete(lowerName);
    } else {
      newPlayers.push({ name });
      existingNamesMap.set(lowerName, { name });
    }
  }
});

console.log("New:", newPlayers);
console.log("Existing to update:", existingPlayersToUpdate);
