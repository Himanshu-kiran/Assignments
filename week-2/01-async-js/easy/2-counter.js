/* <!-- ## Counter without setInterval
Without using setInterval, try to code a counter in Javascript. 
There is a hint at the bottom of the file if you get stuck.
 -->
 */

 function counter (){
    console.log("evrything fine!")
   setTimeout(counter,3000);
}

const intervalId=setTimeout(counter,3000)

