const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
      .replace(/dark:text-white text-slate-900/g, 'text-foreground')
      .replace(/dark:text-white text-slate-800/g, 'text-foreground')
      .replace(/text-slate-900 dark:text-white/g, 'text-foreground')
      .replace(/dark:text-white text-white/g, 'text-foreground')
      .replace(/dark:bg-white\/5 bg-black\/5/g, 'bg-surface-raised')
      .replace(/dark:bg-white\/10 bg-black\/10/g, 'bg-primary/10')
      .replace(/text-slate-300 font-medium group-dark:hover:text-white hover:text-slate-900/g, 'text-muted-foreground font-medium group-hover:text-foreground');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
