// Find the lowest number in the array below.

//1........................

// const heights2 = [167, 190, 120, 165, 137];


// // const minNumbars = Math.max(...heights2)
// const minNumbars = (arr)=> arr.reduce((min,num)=> (min<num? min:num),arr[0])
// // console.log(minNumbars);


// console.log(minNumbars(heights2)); // Output: [ 120, 120, 120, 120,

//2...................................

// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// const friends = (arr)=> arr.reduce((sm,ind)=> (sm.length < ind.length ? sm:ind))
// console.log(friends(heights2)); // Output: [ 'rafi', 'ron' ]

//3....................................


// Your task is to calculate the total budget required to buy electronics:
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
// let laptop = 35000 
// let tablet = 15000 
// let mobile = 20000 

// function calculateElectronicsBudget(a,b,c){
//         let sum = a+b+c;
//         return sum
// }

// let totalMoney = calculateElectronicsBudget( laptop,tablet,mobile)
// console.log(totalMoney +" TK only")