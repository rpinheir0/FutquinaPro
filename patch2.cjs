const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /className=\{\`w-full flex items-center justify-start gap-2 p-2 sm:p-1\.5 rounded-md transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed \$\{[\s\S]*?className=\{\`w-6 h-6 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0 overflow-hidden border \$\{isCurrent \? "border-black\/20 dark:border-white\/20 bg-black\/5 dark:bg-white\/5 text-zinc-900 dark:text-white shadow-inner" : "border-black\/20 dark:border-white\/20 bg-black\/10 dark:bg-white\/10"\}\`\}[\s\S]*?text-\[9px\] font-black leading-none \$\{isCurrent \? "text-zinc-900 dark:text-white" : "text-black\/50 dark:text-white\/40"\}\`\}[\s\S]*?<IoPersonOutline[\s\S]*?size=\{12\}[\s\S]*?\/>[\s\S]*?<\/span>[\s\S]*?<\/div>[\s\S]*?<div className="flex flex-col items-start gap-1 overflow-hidden">[\s\S]*?className=\{\`text-xs font-bold tracking-tight capitalize truncate leading-none \$\{isCurrent \? "text-zinc-900 dark:text-zinc-800" : "text-black\/90 dark:text-white\/90"\}\`\}[\s\S]*?\{p\.name\.toLowerCase\(\)\}[\s\S]*?<\/span>[\s\S]*?<div className="flex gap-0\.5">[\s\S]*?size=\{8\}/;

const replace = `className={\`w-full flex items-center justify-start gap-1 p-1 rounded-sm transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed \${
                                                  swappingPlayerId === pid ||
                                                  movingPlayers?.playerIds.includes(
                                                    pid,
                                                  )
                                                    ? "bg-[#53B986]/20 text-zinc-900 dark:text-white border-2 border-[#53B986] shadow-lg scale-105"
                                                    : (swappingPlayerId &&
                                                          swappingPlayerId !==
                                                            pid) ||
                                                        fillingVacancyForTeam !==
                                                          null ||
                                                        [
                                                          match.teamAIndex,
                                                          match.teamBIndex,
                                                        ].some(
                                                          (targetTIdx) =>
                                                            targetTIdx !== -1 &&
                                                            targetTIdx !==
                                                              tIdx &&
                                                            (teams[targetTIdx]
                                                              ?.playerIds
                                                              ?.length || 0) <
                                                              match.config
                                                                .playersPerTeam,
                                                        )
                                                      ? "bg-[#53B986]/10 text-[#53B986] animate-pulse shadow-sm shadow-[#53B986]/10"
                                                      : \`border group shadow-sm \${isCurrent ? "bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white border-transparent" : "text-zinc-900 dark:text-white bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 hover:bg-black/10 dark:bg-white/10 hover:border-black/20 dark:border-white/20"}\`
                                                }\`}
                                                style={{
                                                  backgroundColor: !(
                                                    (swappingPlayerId &&
                                                      swappingPlayerId !==
                                                        pid) ||
                                                    fillingVacancyForTeam !==
                                                      null ||
                                                    movingPlayers?.playerIds.includes(
                                                      pid,
                                                    ) ||
                                                    [
                                                      match.teamAIndex,
                                                      match.teamBIndex,
                                                    ].some(
                                                      (targetTIdx) =>
                                                        targetTIdx !== -1 &&
                                                        targetTIdx !== tIdx &&
                                                        (teams[targetTIdx]
                                                          ?.playerIds?.length ||
                                                          0) <
                                                          match.config
                                                            .playersPerTeam,
                                                    ) ||
                                                    swappingPlayerId === pid
                                                  )
                                                    ? undefined
                                                    : undefined,
                                                }}
                                              >
                                                <div
                                                  className={\`w-5 h-5 rounded-full flex items-center justify-center shrink-0 overflow-hidden border \${isCurrent ? "border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 text-zinc-900 dark:text-white shadow-inner" : "border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10"}\`}
                                                >
                                                  {p.isGoalkeeper &&
                                                  orgProSettings.allowFixedGoalkeeper !==
                                                    false ? (
                                                    <div
                                                      className={\`flex items-center justify-center shrink-0 rounded-full w-4 h-4 text-[7px] font-black leading-none \${isCurrent ? "text-zinc-900 dark:text-white" : "text-black/50 dark:text-white/40"}\`}
                                                    >
                                                      G
                                                    </div>
                                                  ) : p.photo ? (
                                                    <img
                                                      src={p.photo}
                                                      className="w-full h-full object-cover"
                                                      referrerPolicy="no-referrer"
                                                    ></img>
                                                  ) : (
                                                    <span
                                                      className={\`flex items-center shrink-0 \${isCurrent ? "text-zinc-900 dark:text-white/90" : "text-black/50 dark:text-white/40"}\`}
                                                    >
                                                      <IoPersonOutline
                                                        size={10}
                                                      />
                                                    </span>
                                                  )}
                                                </div>
                                                <div className="flex flex-col items-start overflow-hidden">
                                                  <span
                                                    className={\`text-[10px] font-bold tracking-tight capitalize truncate leading-none \${isCurrent ? "text-zinc-900 dark:text-zinc-800" : "text-black/90 dark:text-white/90"}\`}
                                                  >
                                                    {p.name.toLowerCase()}
                                                  </span>
                                                  <div className="flex gap-0 mt-0.5">
                                                    {[1, 2, 3, 4, 5].map(
                                                      (star) => (
                                                        <Star
                                                          key={\`star-q-\${p.id}-\${star}\`}
                                                          size={6}`;

code = code.replace(regex, replace);
fs.writeFileSync('src/App.tsx', code);
