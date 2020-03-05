const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please input a date (dd-mm-yyyy) format : ", function (date) {
    let re = /^(\d{2})-(\d{2})-(\d{4})$/;
    let matches;
    if ((matches = re.exec(date.toString().trim())) !== null) {
        // console.log(matches);    
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        // console.log(matches[3] + "-" + matches[2] + "-" + matches[1]);
        const inputDate = new Date(matches[3] + "-" + matches[2] + "-" + matches[1]);
        // console.log(inputDate);
        console.log('Day is ', days[inputDate.getDay()]);
        rl.close();
    } else {
        console.log("Input is not a valid date (dd-mm-yyyy) format.");
        rl.close();
    }
});

rl.on("close", function () {
    process.exit(0);
});