let array = [1, 2, 3, 4, 5]; //Array of five element initialization
console.log("Given array is ->")
console.log(array);

//Adding 6 to position 4 using javascript array splice method
array.splice(3, 0, 6);
console.log("New updated array after inserting 6 in 4th position ->")
console.log(array);

//Removing 6 from 4th position using splice method
console.log("New updated array after deleting 6 from 4th position ->")
array.splice(3,1);
console.log(array);