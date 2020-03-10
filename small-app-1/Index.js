if(process.argv.length < 3){
    console.log("No Argument Passed to th file");
} else if (process.argv.length == 3){
    console.log("Second Argument Not Passed to the file");
}else{
    console.log("Second Argument is : '" + process.argv[3] + "'");
}