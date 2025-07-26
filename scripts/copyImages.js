import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('assets');
const destDir = path.resolve('public/images');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Recursively collect all files in srcDir
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Copy and flatten
function copyAndFlatten() {
  const files = getAllFiles(srcDir);
  const usedNames = new Set(fs.readdirSync(destDir));

  files.forEach(srcFile => {
    let baseName = path.basename(srcFile);
    let destFile = path.join(destDir, baseName);
    let count = 1;
    // Handle name conflicts by appending a numeric suffix
    while (usedNames.has(path.basename(destFile))) {
      const ext = path.extname(baseName);
      const name = path.basename(baseName, ext);
      destFile = path.join(destDir, `${name}_${count}${ext}`);
      count++;
    }
    fs.copyFileSync(srcFile, destFile);
    usedNames.add(path.basename(destFile));
  });
  console.log(`Copied ${files.length} files from ${srcDir} to ${destDir} (flattened).`);
}

copyAndFlatten();
