//Javascript Callback Function implementation
function success_error_handle_callback(status=false, message, successCallBack, errorCallBack){
    if(status){
        successCallBack(message);
    }else{
        errorCallBack(message);
    }
}

function successCallBack(message){
    console.log('Success : ', message);
}

function errorCallBack(message){
    console.log('Error : ', message);
}

// let status = true;
// let message = "Successfully Implemented Callbacks";
let status = false;
let message = "Failed to Implement Callbacks";
success_error_handle_callback(status, message, successCallBack, errorCallBack);