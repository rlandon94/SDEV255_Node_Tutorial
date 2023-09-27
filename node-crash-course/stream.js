const fs = require('fs');

const readStream = fs.createReadStream('./docs/blg3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blg4.txt');


// readStream.on('data', (chunk) => {
//     console.log('---- new chunk ----');
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// });

//pipe
readStream.pipe(writeStream);