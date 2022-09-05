 // Streames and Buffer 

 const fs = require('fs');

 // readstream
 const readStream = fs.createReadStream('./chat.txt', {encoding: 'utf8'});
// writestream
const writeStream =fs.createWriteStream('./blog4.txt');

//  readStream.on('data', (chunk) => {

//     console.log(' ======================= new chunk ========');
//     // console.log(chunk.toString()); // we placed utf for enconding the text we don;t need to write tostring.
//     console.log(chunk);
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
//  });


 // pipeing

 readStream.pipe(writeStream);


 