/* 
EASY - Problem 1: You are writing an application that is a "Shopping To Do list". 
Create a variable for the 
   1. title of the list, 
   2. creator of the list, 
   3. 3 list items 
   4. Log the Shopping list to the console with the title in All CAPs. (look in MDN for a function called toUpperCase). 
   5. Log the list items in a single line separated by a ", "
   6. Log the creator
Think through what variables should stay static, which change if its Always a Shopping List, and its always created by the same person?

Example: 
MY SHOPPING LIST
Get tomatoes, Get potatoes, Get Milk
Gabe Rodriguez
*/

// WRITE YOUR CODE HERE
// const title = 'My shopping list'; 
// const creator = 'Gabe Rodriguez'; 
// let item1 = "Get tomatoes"; 
// let item2 = "Get potatoes"; 
// let item3 = "Get Milk"; 

// console.log(title.toUpperCase())
// console.log(item1 + ", " + item2 + ", " +  item3); 
// console.log(creator);

/*
Things you learned: 
1. Difference between `const` and `let`
2. Variable assignment
*/

/* 
MEDIUM - Problem 2: Refactor the code from Problem 1. 
1. Keep the title, and creator variables
2. Write a function that takes a list item as a parameter and displays the item
3. Console log all items on thier own individual lines

Example: 
MY SHOPPING LIST
- Get Tomatoes
- Get Potatos
- Get Milk
Gabe Rodriguez
*/

// WRITE YOUR CODE HERE
const title = 'My shopping list'; 
const creator = 'Gabe Rodriguez'; 
function listItem(item){
    console.log("- " + item)
}

console.log(title.toUpperCase())
listItem("Get Tomatoes"); 
listItem("Get Potatos"); 
listItem("Get Milk");
console.log(creator);

/*
Things you learned: 
1. Difference between `const` and `let`
2. Variable assignment
3. How to write a function
4. How to call a function you wrote
5. How to call a function you didn't write (somebody else did, but you still used it)
*/ 

/*
HARD - Problem 3: Refactor the code from Problem 2. 
1. Keep the title, and creator variables
2. Create a new Array variable called "items"
3. Populate the Array with 3 list items
4. Write a function that displays each index value of the array separated by commas


Example: 
MY SHOPPING LIST
Get Tomatoes, Get Potatos, Get Milk
Gabe Rodriguez
*/

// WRITE CODE HERE
// const title = 'My shopping list'; 
// const creator = 'Gabe Rodriguez'; 
// let items = ["Get Tomatoes", "Get Potatos", "Get Milk"]

// function displayItems(arr){
//     console.log(arr[0] + ", " + arr[1] + ", " + arr[2])
// }

// console.log(title.toUpperCase());
// displayItems(items);
// console.log(creator);

/*
Things you learned: 
1. Difference between `const` and `let`
2. Variable assignment
3. How to use an Array to store values
4. How to pass a parameter to a function
5. How how to index an Array
*/ 