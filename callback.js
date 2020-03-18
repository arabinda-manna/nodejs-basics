//Javascript Callback Function implementation
function success_error_handle_callback(status=false, message, callBack){
    if(status){
        callBack(null, 'Success : ' + message);
    }else{
        callBack({"message" : 'Error : ' + message});
    }
}

function callBack(error, message){
    if(error){
        console.log(error.message);
        return;
    }
    
    console.log(message);
}

// let status = true;
// let message = "Successfully Implemented Callbacks";
let status = false;
let message = "Failed to Implement Callbacks";
success_error_handle_callback(status, message, callBack);