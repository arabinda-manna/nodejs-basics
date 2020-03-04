//Print number 1 to 100 without any loop

function print_recursion(num_counter, output=""){
    num_counter++;
    output = output + " " + num_counter.toString();
    if(num_counter < 100){
        return print_recursion(num_counter, output);
    }else{
        console.log(output);
    }
    return false;
}

print_recursion(0, "");