let standardInput = process.stdin;

standardInput.setEncoding('utf-8');

console.log("Please input a date (dd-mm-yyyy) format.");

standardInput.on('data', function (data) {
    if (data === 'exit\n') {
        // Program exit if user write exit & press enter
        process.exit();
    } else {
        processData(data);
    }
});

function processData(date) {    
    let re = /^(\d{2})-(\d{2})-(\d{4})$/;
    let matches;
    if ((matches = re.exec(date.toString().trim())) !== null){
        // console.log(matches);    
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        // console.log(matches[3] + "-" + matches[2] + "-" + matches[1]);
        const inputDate = new Date(matches[3] + "-" + matches[2] + "-" + matches[1]);
        // console.log(inputDate);
        console.log('Day is ', days[inputDate.getDay()]);
        process.exit();
    }else{
        console.log("Please input a valid date (dd-mm-yyyy) format.");
        return false;
    }
}