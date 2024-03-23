/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            //function for res,reject and delaytime is two things in setTimeout
            //after delay time promise is resolved
            resolve();
        }, n * 1000); // Convert seconds to milliseconds
    });
}

module.exports = wait;
