const Joi = require('@hapi/joi');
async function first10MultiplesInputValidate(inputs){
    const schema = Joi.object({
        num: Joi.number()
            .integer()
            .min(0)
            .max(10)
            .required(),
    });
    try {
        await schema.validateAsync(inputs);
        return {"status":true};
    }
    catch (err) {
        // console.log(err);
        return { "status": false, "message": "Invalid number passed. Number must be between 0-10"};
    }
}

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

async function stringCharacterCalcInputValidate(inputs) {
    const schema = Joi.object({
        string: Joi.string()
            .min(1)
            .max(256).required(),
    });

    try {
        await schema.validateAsync(inputs);
        // console.log(value);
        return { "status": true };
    }
    catch (err) {
        return { "status": false, "message": "Invalid string passed. String must have length between 1-256" };
    }
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

async function isAmstrongInputValidate(inputs) {
    const schema = Joi.object({
        num: Joi.number()
            .integer()
            .min(0)
            .max(10000000)
            .required(),
    });

    try {
        await schema.validateAsync(inputs);
        // console.log(value);
        return { "status": true };
    }
    catch (err) {
        return { "status": false, "message": "Invalid number passed. Number must be between 0-10000000" };
    }
}

function isAmstrong(num) {
    let numArr = num.split("");
    // console.log(numArr);
    
    let sum = numArr.reduce((sum, num) => sum + Math.pow(num,3), 0);
    if(sum == parseInt(num)){
        return num + " is a Amstrong number";
    }else{
        return num + " is not a Amstrong number";
    } 
}

module.exports = { first10MultiplesInputValidate, first10Multiples, stringCharacterCalcInputValidate, stringCharacterCalc, isAmstrongInputValidate, isAmstrong};
// module.exports = { "first10MultiplesInputValidate": first10MultiplesInputValidate, "first10Multiples": first10Multiples, "stringCharacterCalc": stringCharacterCalc, "isAmstrong":isAmstrong};
// exports.first10MultiplesInputValidate = first10MultiplesInputValidate;
// exports.first10Multiples = first10Multiples;
// exports.stringCharacterCalc = stringCharacterCalc;
// exports.isAmstrong = isAmstrong;