//Nodejs Promise & Promise.all implementation
function executeFor5Sec() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, "done executing executeFor5Sec function");
    });
}

function execute150000TimesLoop() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < 150000; i++) {
            
        }
        // resolve("done executing execute150000TimesLoop function");
        reject("failed executing execute150000TimesLoop function");
    });
}

/** Executing both promise returning function and checking one by one if both promisses resolved, it increases the coding lines*/
// let timeoutPromise = executeFor5Sec();
// let loopPromise = execute150000TimesLoop();

// timeoutPromise.then(timeoutPromiseRes => {
//     console.log(timeoutPromiseRes);
//     loopPromise.then(loopPromiseRes => {
//         console.log(loopPromiseRes);
//         console.log("All Promises Executed Successfully")
//     }).catch(error => {

//     });
// }).catch(error => {

// });
/** Executing both promise returning function and checking one by one if both promisses resolved, it increases the coding lines*/

/** Same functionality like above but minimum lines of code*/
let timeoutPromise = executeFor5Sec();
let loopPromise = execute150000TimesLoop();

Promise.all([timeoutPromise, loopPromise]).then(allPromisesRes => {
    console.log(allPromisesRes);
    console.log("All Promises Executed Successfully");
}).catch(allPromisesError => {
    console.log(allPromisesError);
});
/** Same functionality like above but minimum lines of code*/