const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const migrationCode = `  // --- MIGRATION: Migrate old local storage data to the current group ---
  useEffect(() => {
    const hasGlobalMigrated = safeLocalStorage.getItem("futquina_global_migrated");
    if (!hasGlobalMigrated) {
      const oldPlayers = safeLocalStorage.getItem("futquina_players");
      if (oldPlayers) {
        let matchId = "";
        const oldMatches = safeLocalStorage.getItem("futquina_scheduled_matches");
        if (oldMatches) {
          try {
            const parsed = JSON.parse(oldMatches);
            if (Array.isArray(parsed) && parsed.length > 0) {
              matchId = parsed[0].id;
              safeLocalStorage.setItem(\`futquina_scheduled_matches_\${groupId}\`, oldMatches);
            }
          } catch(e) {}
        }
        
        if (!matchId) {
           matchId = "migrated_match_" + Date.now();
           const newMatches = [{
              id: matchId,
              name: "Pelada Migrada",
              date: Date.now(),
              location: "Arena a definir",
              time: "08:00",
              status: "Pendente",
              confirmedPlayers: 0,
              maxPlayers: 16,
           }];
           safeLocalStorage.setItem(\`futquina_scheduled_matches_\${groupId}\`, JSON.stringify(newMatches));
        }

        const matchPrefixes = [
            "futquina_players",
            "futquina_teams",
            "futquina_match",
            "futquina_last_result",
            "futquina_payments",
            "futquina_session_player_ids",
            "futquina_match_history",
            "futquina_expenses",
        ];
        
        for (let i = 0; i < localStorage.length; i++) {
           const key = localStorage.key(i);
           if (key && key.startsWith("futquina_") && !key.includes("_") && !key.startsWith("futquina_global_")) {
             // Wait, old keys might have underscores like 'futquina_match_history'
           }
        }
        // Let's just explicitly map known old keys
        const otherKeys = [
          "futquina_theme", "futquina_monthly_fee", "futquina_org_settings", 
          "futquina_org_pro", "futquina_available_years", "futquina_selected_year", 
          "futquina_manual_adjustment", "futquina_finance_subscreen", "futquina_first_setup_done"
        ];
        
        for (const prefix of matchPrefixes) {
           const val = safeLocalStorage.getItem(prefix);
           if (val) safeLocalStorage.setItem(\`\${prefix}_\${groupId}_\${matchId}\`, val);
        }
        for (const k of otherKeys) {
           const val = safeLocalStorage.getItem(k);
           if (val) safeLocalStorage.setItem(\`\${k}_\${groupId}\`, val);
        }

        safeLocalStorage.setItem(\`futquina_selected_match_id_\${groupId}\`, matchId);
      }
      safeLocalStorage.setItem("futquina_global_migrated", "true");
      // Force reload to pick up migrated data
      window.location.reload();
    }
  }, [groupId]);

  const [theme, setTheme] = useState`;

code = code.replace(/  const \[theme, setTheme\] = useState/, migrationCode);
fs.writeFileSync('src/App.tsx', code);
