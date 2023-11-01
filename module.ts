import path from 'path';

const filePath = path.join('blogs', 'blog1', 'index.html');
const fileName = path.basename(filePath);

console.log(fileName);