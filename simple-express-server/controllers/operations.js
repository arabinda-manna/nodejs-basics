function first10Multiples(num) {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        if(i !== 1){
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
        if(output[element] != undefined){
            output[element]++;
        }else{
            output[element] = 1;
        }
    });
    
    return JSON.stringify(output);
}

exports.first10Multiples = first10Multiples;
exports.stringCharacterCalc = stringCharacterCalc;