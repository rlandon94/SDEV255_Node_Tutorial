const { error } = require('console');
const fs = require('fs');

//read files
// fs.readFile('./docs/blg1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });

// console.log('last line');


// write file
// fs.writeFile('./docs/blg1.txt', 'hello, world', () => {
//     console.log('file was written');
// });

//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
}

//deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}