import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# For the 4 screen tabs:
# 1. players
# 2. teams
# 3. ranking
# 4. finance
# We want to add disabled={showGlobalSettings} and a disabled style.

def add_disabled(match):
    # match.group(0) is the full button tag up to the onClick
    # we just insert disabled={showGlobalSettings} before onClick
    return match.group(1) + '\n                disabled={showGlobalSettings}' + match.group(2)

content = re.sub(r'(<button)([\s\n]*onClick=\{\(\) => \{\s*const screens:\s*Screen\[\] = \[)', add_disabled, content)
content = re.sub(r'(<button)([\s\n]*onClick=\{\(\) => setShowGlobalSettings\(true\)\})', r'\1\n                onClick={() => setShowGlobalSettings(!showGlobalSettings)}', content)

# But wait, we also need to change pointer-events or something if it's disabled.
# Standard buttons get pointer-events: none if disabled? No, they just don't fire onClick.
# To ensure they don't look disabled, maybe we just do nothing, or add a class?
# Actually, the user says "só conseguirá mexer", meaning they shouldn't be able to interact.
# Adding `disabled={showGlobalSettings}` to the button element is perfect.

with open('src/App.tsx', 'w') as f:
    f.write(content)
