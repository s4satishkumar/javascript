const fs = require('fs');

// // reading file

// // first of all we need to import fs module
// fs.readFile('./myfolder.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// }); /// this will read the file asynchronusly and will print asynchronsly

// console.log('last line');


// // writing file

// fs.writeFile('./myfolder.txt', 'hello , world', () => {
//     console.log('file was written');
// }); // it will update the hello world in the existing file

// fs.writeFile('./myfolder1.txt', 'hello , world', () => {
//     console.log('file was written');
// });// if the folder is not existed then ot will create a folder and will write into them



// // directories

// // here this whole code 31-42 will create the folder if not exist if exit it will say folder exist
// if (!fs.existsSync('./deleteme')) { //this will sync is file is exist or not 

//     var data = fs.mkdir('./deleteme', (err) => { // mkdir will create folder if not exist 
//         if (err) {
//             console.log(err);
//         }
//         console.log(  'folder created');
//     });
// }
// else {
//     console.log('folder exist')
// }
// // this existsSync method check if exist then it tearing as false because of ! operator and it go to the else part and it say folder exist
// //  this existsSync method check if not exist then it tearing as True because of ! operator and it go to the if part and the folder created



// // this whole code will create if not exist if exist it will delete that folder
// if (!fs.existsSync('./assets')) { //this will sync is file is exist or not 

//     var data = fs.mkdir('./assets', (err) => { // mkdir will create folder if not exist 
//         if (err) {
//             console.log(err);
//         }
//         console.log(  'folder created');
//     });
// }
// else {
//     fs.rmdir('./assets', (err) => { //rmdir will delete the folder 
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted');
//     });
// }
// /* 
// // this existsSync method check if exist then it tearing as false because of ! operator and it go to the else part and it delete folder
// //  this existsSync method check if not exist then it tearing as True because of ! operator and it go to the if part and the folder created
// */

// deleting files

// if file exists then delete that
if(fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt' , (err) => {
        if(err){
            console.log(err);
        }
        console.log('file is deleted by delte opeartion')
    });
}
else{
    console.log('file is not exist saying delete operation')
}
// unlink will delete the file

