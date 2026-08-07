const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /\/\/ Restore each key mapping it to the current groupId\s+for \(const \[key, value\] of Object\.entries\(backupObj\.data\)\) \{\s+if \(!key\.startsWith\("futquina_"\)\) continue;\s+let newKey = key;\s+let isMatchSpecific = false;/s;

const replace = `// Restore each key mapping it to the current groupId
          for (const [key, value] of Object.entries(backupObj.data)) {
            if (!key.startsWith("futquina_")) continue;

            // Only process keys belonging to the backup group
            const belongsToGroup = key === \`futquina_theme_\${backupGroupId}\` || 
                                   key.includes(\`_\${backupGroupId}_\`) || 
                                   key.endsWith(\`_\${backupGroupId}\`);
            if (!belongsToGroup) {
              continue;
            }

            let newKey = key;
            let isMatchSpecific = false;`;

code = code.replace(regex, replace);
fs.writeFileSync('src/App.tsx', code);
