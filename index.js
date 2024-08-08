// Task 1: Print Numbers
// Write a JavaScript program that uses a for loop to print all numbers from 1 to 10 to the console.

for(let i = 1; i < 11;i++){
  console.log(i)
}




// Task 2: Odd Numbers
// Write a JavaScript program that uses a for loop to print all odd numbers from 15 to 40 to the console.

for(let i = 15; i < 40 ;i++){
  if(i % 2 == 1){
    console.log(i)
  }
}


// Task 3: Sum of Numbers
// Write a JavaScript program that calculates and prints the sum of all numbers from 10 to 20 using a for loop.

let sum = 0

for(let i = 10; i <= 20; i++){
  sum = sum + i
  console.log(sum)
}
  


// Task 4: Array Iteration
// Create an array of numbers (e.g., [1, 2, 3, 4, 5]) and write a JavaScript program that uses a for loop to iterate through the array and print each element to the console.

let array = [1,2,3,4,5]

for(let index = 0; index <= 4; index++){
  console.log(array[index])
}


// Task 5: Array Sum
// Create an array of numbers and write a JavaScript program that calculates and prints the sum of all the elements in the array using a for loop.


let array2 = [1,2,3,4,5]

let sum2 = 0

for(let index2 = 0;index2<array2.length;index2++){
  sum2 = sum2 + array[index2]
}

console.log(sum2)



// Stretch: Element counter
// Create an array of numbers
// Prompt the user for a number and write a for loop that tracks how many times that number is in the array
// e.g. 5 for [5, 1, 2, 5] --> 2





