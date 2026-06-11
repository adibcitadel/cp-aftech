const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const fixes = [
  { regex: /hover:dark:bg-white\/(\d+)\s+bg-black\/\1/g, replacement: 'dark:hover:bg-white/$1 hover:bg-black/$1' },
  { regex: /group-hover:dark:bg-white\/(\d+)\s+bg-black\/\1/g, replacement: 'dark:group-hover:bg-white/$1 group-hover:bg-black/$1' },
  { regex: /hover:dark:border-white\/(\d+)\s+border-black\/\1/g, replacement: 'dark:hover:border-white/$1 hover:border-black/$1' },
  { regex: /group-hover:dark:border-white\/(\d+)\s+border-black\/\1/g, replacement: 'dark:group-hover:border-white/$1 group-hover:border-black/$1' },
  { regex: /hover:dark:text-white\s+text-slate-900/g, replacement: 'dark:hover:text-white hover:text-slate-900' },
  { regex: /group-hover:dark:text-white\s+text-slate-900/g, replacement: 'dark:group-hover:text-white group-hover:text-slate-900' }
];

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    fixes.forEach(f => {
      content = content.replace(f.regex, f.replacement);
    });
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed prefixes: ' + filePath);
    }
  }
});
