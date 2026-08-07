const players = [];
const lines = "1. Renato\n2. Joao\n3. Maria".split("\n");
const newPlayers = [];
const ignorePatterns = [
  /\d{1,2}[\/\-]\d{1,2}/, // Dates
  /\d{1,2}:\d{2}/, // Times
  /^(lista|jogadores|convocados|presença|confirmados|futebol|pelada|horário|data|local|valor)/i, // Titles
  /^\s*$/, // Empty lines
];
const existingNames = new Set(players.map((p) => p.name.toLowerCase()));
const isAnyAvailable = players.some((p) => p.isAvailable);

lines.forEach((line, i) => {
  let name = line.replace(/^[\d\.\-\*\•\s]+(?=\s|[A-Z])/, "").trim();
  if (!name) name = line.replace(/^[\d\.\-\*\•\s]+/, "").trim();
  const shouldIgnore = ignorePatterns.some((pattern) => pattern.test(name));
  if (name && name.length > 1 && !shouldIgnore) {
    if (existingNames.has(name.toLowerCase())) return;
    existingNames.add(name.toLowerCase());
    newPlayers.push({ name });
  }
});
console.log(newPlayers);
