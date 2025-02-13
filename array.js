const numbars = [1,2,3,4,5,6,7,8,9,10]

function getSum(num) {
    let sum = 0;
    numbars.map((item)=> sum+=item)
    return sum;
}

const result = getSum(numbars)
console.log(result)

function getmenu (){
    console.log("burger","pizza","pasta")
}

getmenu()