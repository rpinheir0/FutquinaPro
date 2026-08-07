import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Replace the classes for the nav buttons
# 1. flex-1 flex flex-col items-center justify-center py-2 transition-all duration-300 rounded-none relative overflow-hidden
# -> flex-1 flex flex-col items-center justify-center py-2 mx-1 transition-all duration-300 rounded-2xl relative overflow-hidden
content = content.replace('flex-1 flex flex-col items-center justify-center py-2 transition-all duration-300 rounded-none relative overflow-hidden', 'flex-1 flex flex-col items-center justify-center py-2 mx-1 transition-all duration-300 rounded-2xl relative overflow-hidden')

# 2. currentScreen === "players" ? "text-[#00aa00] dark:text-[#00ff00] bg-black/5 dark:bg-white/5 shadow-inner" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white/80 hover:bg-black/5 dark:hover:bg-white/5"
# -> ? "text-[#59b823] dark:text-[#75c628] bg-[#59b823]/10 dark:bg-[#75c628]/10" : "text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 hover:bg-black/5 dark:hover:bg-white/5"
content = content.replace('? "text-[#00aa00] dark:text-[#00ff00] bg-black/5 dark:bg-white/5 shadow-inner"', '? "text-[#59b823] dark:text-[#75c628] bg-[#59b823]/10 dark:bg-[#75c628]/10"')
content = content.replace(': "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white/80 hover:bg-black/5 dark:hover:bg-white/5"', ': "text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 hover:bg-black/5 dark:hover:bg-white/5"')

# 3. Remove motion.div layoutId="nav-glow"
content = re.sub(r'\{\s*(?:currentScreen\s*===\s*"[^"]+"|showGlobalSettings)\s*&&\s*\(\s*<motion\.div\s*layoutId="nav-glow"\s*className="absolute -top-4 w-12 h-4 bg-\[#00ff00\] opacity-30 blur-xl rounded-full"\s*/>\s*\)\s*\}\s*', '', content)

# 4. Remove text-[#00ff00] from the active icons
content = content.replace('-translate-y-0.5 text-[#00ff00]', '-translate-y-0.5')

with open('src/App.tsx', 'w') as f:
    f.write(content)
