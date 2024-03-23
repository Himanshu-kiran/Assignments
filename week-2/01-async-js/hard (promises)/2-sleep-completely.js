/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(function (resolve, reject) {
        //need to create loop to halt the thread
        //before reaching resolve/reject-- to be looped for given milliseconds

        //to get the current timestamp before starting the loop.
        //This timestamp is then used to calculate the duration of time elapsed while the busy-wait loop is running.
        const startTime = Date.now();

        while (Date.now() - startTime < milliseconds) {
            //nothing, just running loop
        }
        resolve();

    })
}

module.exports = sleep;
