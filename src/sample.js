let arr=[1,2,3];
let [a,b,c] = arr
console.log(a+" "+b+" "+c)


// Rest and Spread 
let[...arr1]= arr //rest
console.log(...arr1) //spread



let array1=[1,2,3,4]
let array2=[4,5,6,7]

let finalArray = [...array1,...array2]