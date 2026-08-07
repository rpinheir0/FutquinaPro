const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regexMatches = /const matchesKey = dataKeys\.find\(\(k\) => k\.startsWith\("futquina_scheduled_matches_"\)\);/;
code = code.replace(regexMatches, 'const matchesKey = dataKeys.find((k) => k.startsWith("futquina_scheduled_matches_") || k === "futquina_scheduled_matches");');

const regexRestoreKeys = /\/\/ Restore each key mapping it to the current groupId[\s\S]*?localStorage\.setItem\(newKey, value as string\);/s;

const replaceRestoreKeys = `// Restore each key mapping it to the current groupId
          const isOldBackup = backupGroupId === "";
          for (const [key, value] of Object.entries(backupObj.data)) {
            if (!key.startsWith("futquina_")) continue;

            // Only process keys belonging to the backup group
            const belongsToGroup = isOldBackup ? true : (key === \`futquina_theme_\${backupGroupId}\` || 
                                   key.includes(\`_\${backupGroupId}_\`) || 
                                   key.endsWith(\`_\${backupGroupId}\`));
            if (!belongsToGroup) {
              continue;
            }

            let newKey = key;
            let isMatchSpecific = false;

            // Map match ID if it matches any of the backup match IDs
            const foundPrefix = matchPrefixes.find((prefix) =>
              isOldBackup ? key === prefix : key.startsWith(\`\${prefix}_\`),
            );

            if (foundPrefix) {
              if (isOldBackup) {
                newKey = \`\${foundPrefix}_\${groupId}_\${selectedNewMatchId}\`;
                isMatchSpecific = true;
              } else {
                const expectedPrefix = \`\${foundPrefix}_\${backupGroupId}_\`;
                if (key.startsWith(expectedPrefix)) {
                  const bMatchId = key.replace(expectedPrefix, "");
                  const mappedNewId = matchIdMap[bMatchId];
                  if (mappedNewId) {
                    newKey = \`\${foundPrefix}_\${groupId}_\${mappedNewId}\`;
                    isMatchSpecific = true;
                  }
                }
              }
            }

            // Map group ID for other keys
            if (!isMatchSpecific) {
              if (isOldBackup) {
                newKey = \`\${key}_\${groupId}\`;
              } else {
                newKey = key.replace(\`_\${backupGroupId}\`, \`_\${groupId}\`);
              }
            }

            // Skip scheduled matches key since we handle it manually
            if (key.startsWith("futquina_scheduled_matches_") || key === "futquina_scheduled_matches") {
              continue;
            }

            localStorage.setItem(newKey, value as string);`;

code = code.replace(regexRestoreKeys, replaceRestoreKeys);
fs.writeFileSync('src/App.tsx', code);
