//Print number 1 to 100 without any loop
let num_counter = 0;
function print_recursion(){
    num_counter++;
    console.log(num_counter);
    if(num_counter < 100){
        return print_recursion();
    }
}

print_recursion();