function first10Multiples(num) {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        if (i !== 1) {
            output += " ";
        }
        output += Math.pow(num, i).toString();
    }
    return output;
}

function stringCharacterCalc(str) {
    let strArr = str.split("");
    let output = {};
    strArr.forEach(element => {
        element = element.toLowerCase();
        if (output[element] != undefined) {
            output[element]++;
        } else {
            output[element] = 1;
        }
    });

    return JSON.stringify(output);
}

function isAmstrong(num) {
    let numArr = num.toString().split("");
    // console.log(numArr);

    let sum = numArr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
    if (sum == parseInt(num)) {
        return num + " is a Amstrong number";
    } else {
        return num + " is not a Amstrong number";
    }
}

module.exports = { first10Multiples, stringCharacterCalc, isAmstrong };