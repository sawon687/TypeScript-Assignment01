//Problem 1 Solution |
const filterEvenNumbers=(arr:number[]):number[]=>{
 
    return arr.filter(num => num % 2 === 0)

}



// const result=filterEvenNumbers([1, 2, 3, 4, 5, 6])

// console.log('problem1 result',result)

//Problem 2 Solutions 
const reverseString=(input:string):string=>{
     
    return input.split('').reverse().join('')
}


const result=reverseString("typescript");

console.log(`"${result}"`)


// Problem 3 Solutions
type TStringOrNumber=string|number;


const checkType=(input:TStringOrNumber):string=>{
  return typeof input ==='string'?'String':'Number'
}


console.log(checkType(30))
console.log(checkType('Horidas'))