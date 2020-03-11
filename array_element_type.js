let array = new Array();

array.push(1); //Integer number
array.push("Arabinda"); //String
array.push({}); //Object
array.push(function(){}); //Function

array.forEach((value)=>{
    console.log(typeof value);
})
