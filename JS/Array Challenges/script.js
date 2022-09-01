
// Challenge#1************************************************
console.log('Challenge #1');
function alwaysHungry(arr) {
    // your code here 
    let food=false;
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]=='food'){
            food=true;
            newArr.push("yummy");
        }
    }
    
    let str="";
    if(food==false){
        console.log("I'm Hungry!");
    }
    else{
        for(let i=0;i<newArr.length;i++){
            if(i==newArr.length-1)str+=('"yummy"');
            else{
                str+=('"yummy", ');
            }
        }
        console.log(str);
    }

}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// Challenge#2***************************************************
console.log('Challenge #2');
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(let i=0;i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// Challenge#3**************************************************
console.log('Chellenge #3');

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    let avg= average(arr);


    var count = 0
    // count how many values are greated than the average
    for(let i=0;i<arr.length;i++){
        if(arr[i]>avg)count++;
    }
    return count;
}
function average(arr){
    let sum=arr[0];
    for(let i=1;i<arr.length;i++){
        sum+=arr[i];
    }
    return (sum/arr.length);
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Challenge#4**************************************************
console.log('Chellenge #4');

function reverse(arr) {
    // your code here
    let tempArr=[];
    let arrLength=arr.length;
    for(let i=0;i<arrLength;i++)
    {
        tempArr.push(arr.pop());
    }
    arr=tempArr;
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]




// Challenge#5**************************************************
console.log('Chellenge #5');


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for(let i=2;i<n;i++){
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

