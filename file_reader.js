//file reading using nodejs's fs module
const fs = require("fs");

fs.readFile('/home/arabinda/Desktop/NodeJS/file.txt',{encoding:"utf8",flag:"r"}, fileOpened);

function fileOpened(error, data){
    if(error){
        console.log("File Opened Unsuccessful");
        return false;    
    }

    console.log('File Content : ', data);
}