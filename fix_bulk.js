const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Replace addBulkPlayers logic to unconditionally make them available and add to session
code = code.replace(
  /const existingNames = new Set\(players\.map\(\(p\) => p\.name\.toLowerCase\(\)\)\);\s*const isAnyAvailable = players\.some\(\(p\) => p\.isAvailable\);\s*lines\.forEach\(\(line, i\) => \{/g,
  `const existingNames = new Set(players.map((p) => p.name.toLowerCase()));

      lines.forEach((line, i) => {`
);

code = code.replace(
  /isAvailable: isAnyAvailable,\s*arrivedAt: isAnyAvailable \? Date\.now\(\) \+ i : undefined,/g,
  `isAvailable: true,
            arrivedAt: Date.now() + i,`
);

code = code.replace(
  /if \(isAnyAvailable\) \{\s*setSessionPlayerIds\(\(prev\) => \[\s*\.\.\.prev,\s*\.\.\.newPlayers\.map\(\(p\) => p\.id\),\s*\]\);\s*\}/g,
  `setSessionPlayerIds((prev) => [
          ...prev,
          ...newPlayers.map((p) => p.id),
        ]);`
);

fs.writeFileSync('src/App.tsx', code);
