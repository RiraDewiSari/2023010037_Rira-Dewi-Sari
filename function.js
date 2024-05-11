//return => console.log()

/*function addName(){
     return 'rira'
 }
 alert(addName())
*/

function addName(){
    console.log(arguments)}
    addName('rira', 'dewi')

//cara 1 keyword new function
const sum1 = new Function('x','y','console.log(x+y)')

//cara 2 standar function
function sum2(x,y) {
    if (x+y == 4) {
        console.log('wowoww')
    }
    // console.log(x+y)
}

//cara arrow function
 const sum3 = (x,y) => {
    console.log(x+y)
}

function randomsize() {
   const randomNumber = (Math.random()*1000)
    if (randomNumber > 200) {
        console.log('lebih dari 200 kan', randomNumber)
    } else {
        console.log(randomNumber)
    }
}
randomsize()

sum1(1,1)
sum2(2,2)
sum3(3,3)

