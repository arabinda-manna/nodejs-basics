function first10Multiples(num) {
  let output = '';
  for (let i = 1; i <= 10; i++) {
    if (i !== 1) {
      output += ' ';
    }
    output += (num ** i).toString();
  }
  return output;
}

function stringCharacterCalc(str) {
  const strArr = str.split('');
  const output = {};
  strArr.forEach((element) => {
    element = element.toLowerCase();
    if (output[element] !== undefined) {
      output[element]++;
    } else {
      output[element] = 1;
    }
  });

  return JSON.stringify(output);
}

function isAmstrong(num) {
  const numArr = num.toString().split('');
  // console.log(numArr);

  const sum = numArr.reduce((acc, n) => acc + n ** 3, 0);
  if (sum === parseInt(num, 10)) {
    return `${num} is a Amstrong number`;
  }
  return `${num} is not a Amstrong number`;
}

module.exports = { first10Multiples, stringCharacterCalc, isAmstrong };
