const xyz= require('./peoplefile');

console.log(xyz);  // it will return an empty object if you printing without exporting the  module;
// it will print people file right after importing the file    
console.log(people); // it will not work because it is exported into the xyz as module 

// console.log(xyz.peop,xyz.ages)


// when you want to export from differnt files we can use destructring;
// const {peop,ages} = require('./peoplefile');
// console.log(peop ,ages);

// const os = require('os');
// // console.log(os);

// // console.log(os.platform())
// console.log(os.platform(),os.homedir);