/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, t1*1000)
    })
}

function wait2(t2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, t2*1000)
    })
}

function wait3(t3) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, t3*1000)
    })
}

function calculateTime(t1, t2, t3) {
   // console.log("will only resolve if above get resolved")
    const startTime = Date.now(); // Get the starting time
    // Call the three functions to get promises
    const promise1 = wait1(t1);
    const promise2 = wait2(t2);
    const promise3 = wait3(t3);
    // Use Promise.all to wait for all promises to resolve
    return Promise.all([promise1, promise2, promise3])
  .then(function () {
        // Calculate the total time taken
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        return totalTime; // Return the time taken in milliseconds
    });
}

module.exports = calculateTime;

