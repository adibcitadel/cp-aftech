const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = [
  { regex: /\btext-white\b/g, replacement: 'dark:text-white text-slate-900' },
  { regex: /\btext-slate-400\b/g, replacement: 'text-muted-foreground' },
  { regex: /\btext-slate-500\b/g, replacement: 'text-muted-foreground' },
  { regex: /\bbg-\[#020617\]\b/g, replacement: 'bg-background' },
  { regex: /\bbg-white\/5\b/g, replacement: 'dark:bg-white/5 bg-black/5' },
  { regex: /\bbg-white\/10\b/g, replacement: 'dark:bg-white/10 bg-black/10' },
  { regex: /\bbg-white\/20\b/g, replacement: 'dark:bg-white/20 bg-black/20' },
  { regex: /\bbg-white\/\[0\.02\]\b/g, replacement: 'dark:bg-white/[0.02] bg-black/[0.02]' },
  { regex: /\bborder-white\/5\b/g, replacement: 'dark:border-white/5 border-black/5' },
  { regex: /\bborder-white\/10\b/g, replacement: 'border-border' },
  { regex: /\bborder-white\/20\b/g, replacement: 'dark:border-white/20 border-black/20' },
];

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx') && !filePath.includes('ThemeProvider.tsx') && !filePath.includes('ThemeToggle.tsx') && !filePath.includes('layout.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    replacements.forEach(r => {
      content = content.replace(r.regex, r.replacement);
    });
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
