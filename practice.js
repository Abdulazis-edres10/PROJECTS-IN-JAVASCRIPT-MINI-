// for (i = 0; i <= 5; i++){
//     console.log("GoodMorning")

// }
// cars = ["volvo", "Jeep", "Avanza"]
// console.log(cars[2])
// let country = "USA";
// let age = 12;
//let text = "You can drive now";
// if(country = "USA"){
//     if (age >= 18){
//         console.log(text);
//     }
//     else{
//         console.log("BAWAL")
//     }
// }
// if (country = "USA" || age >=18){
//     console.log(text)
// }else {
//     console.log("BAWALl")
// }
// let text = (age>18) ? "too old" : "too young"
// i = 5;
// while (i >= 0){
//     console.log("THE NUMBER IS: " + i);
//     i--;
// }

// const names = ["ABRA", "KING", "RICK","NADJ"]
// let i = 0;
// let text = "";
// for(;names[i];){
//     text+=names[i];
//     console.log(text);
//     i++;
// }

// const Fruits = ["Banana", "Apple", "Orange", "Durian"]
// let i = 3;
// // let text = "";
// while(Fruits[i]){
//     //text += Fruits[i];
//     let text = "";
//     console.log(Fruits[i]);
//     i--;
// }

// for (i = 1; i < 10; i++){
//     if (i == 4){
//         break;
//     }
//     console.log("The number is: " + i)
// }

// for (let i = 0; i < 5; i++) {
//   if (i === 3) { continue; }
//   console.log("the number is: " + i)
// }
// console.log("we are so called \'vikings\' of the north");

// console.log("we are 'vikings' of the north");
// let greetings = {
//     name:"Azis",
//     greet: function(){
//         console.log("Hello " + "" + this.name);
//     }
// };
// greetings.greet();

// let attitude = "bad";
//     if (attitude == "Good"){
//         function greet(){
//         console.log("Hello");
//         }
//         greet();
//     }else {
//         console.log("You are a bad person!");
//     }
// function addNumbers(a, b){
//     console.log(a + b)
// }
// addNumbers(4,3);
// addNumbers(7,3);

// function sayHello() {
//   return "Hello World";
// }
// let greeting = sayHello();
// function multiply(a,b){
//  console.log(a * b);
// }
// multiply(4, 5);

// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   age      : 50,
//   fullName : function() {
//     console.log(this.firstName + " " + this.lastName);
//   }
// };

//MP_01

// let studentA = 78;
/*let scores = [95, 82, 67, 58, 74]
let student = ""
function analyzeScores (){
  for (i = 0; i <= scores[i]; i++){
     student += scores[i];
    // console.log("Score:" + scores[i])
    if(scores >= 95){
    console.log("Score:" + scores[i] + "Grade: A | Passed");
  } else if (scores >= 82){
        console.log("Score:" + scores[i] + "Grade: B | Passed");
  } else if (scores >= 67) {
    console.log("Score:" + scores[i] + "Grade: D | Passed");
  }else if(scores >= 58){
    console.log("Score:" + scores[i] + "Grade: F | Failed");
  } else if (scores >= 74){
    console.log("Score:" + scores[i] + "Grade: C | Passed");
  } else{
    console.log("Too low!");
  }

  } 
  
};
analyzeScores(scores); */

// let scores = [95, 82, 67, 58, 74];         MY OWN SOL

// function analyzeScores(scores) {
//   for (let i = 0; i < scores.length; i++) {
//     let score = scores[i];
//     let grade = "";
//     let status = "";

//     if (score >= 90) {
//       grade = "A";
//       status = "Passed";
//     } else if (score >= 80) {
//       grade = "B";
//       status = "Passed";
//     } else if (score >= 70) {
//       grade = "C";
//       status = "Passed";
//     } else if (score >= 60) {
//       grade = "D";
//       status = "Passed";
//     } else {
//       grade = "F";
//       status = "Failed";
//     }

//     console.log(`Score: ${score} | Grade: ${grade} | ${status}`);
//   }
// }

// analyzeScores(scores);

/*let scores = [95, 82, 67, 58, 74];  FROM GPT

function analyzeScores(scores){
  for (i = 0; i < scores.length; i++){
    let score = scores[i];
    let grade = "";
    let status = "";

    if (score >= 90){
      grade = 'A';
      status = "Passed";
    } else if (score >= 80){
      grade = "B";
      status = "Passed";
    }else if (score >= 70){
      grade = "C";
      status = "Passed";
    }else if (score >= 60){
      grade = "D";
      status = "Passed";
    } else {
      grade = "F";
      status = "Failed";
    }
    console.log(`Scores: ${score} | Grade: ${grade} | Status: ${status}`)

  }
}
analyzeScores(scores); */
/*
let prices = [120, 80, 5, 20, 55]
let total = 0;
let discount = 0;
let finalTotal = 0;
  for (let i = 0; i < prices.length; i++){
     total =total + prices[i];
    
    if (total >= 300){
            discount = total*0.10;
    
    }else{
      discount = 0;
    }
    finalTotal = total - discount;
    
  }
    console.log(`Total: ${total}`)
    console.log(`Discount: ${discount}`)
    console.log(`Final total: ${finalTotal}`)
*/

// let number = [12, 7, 25, 3, 18, 10]
// let evenNumber = 0;
// let oddNumber = 0;
// let largestNumber = 0;
// let smallestNumber = number[0];
// let totalNumber = 0;

// for (i = 0; i < number.length; i++){
//   let num = number[i]
//   if (num % 2 == 0){
//     evenNumber++;
//   }else{
//     oddNumber++
//   }

//   if (num > largestNumber){
//     largestNumber = num;
//   }
//   if(num < smallestNumber){
//     smallestNumber = num
//   }

//   totalNumber = totalNumber + num;

// }

// console.log(`Even count: ${evenNumber}`);
// console.log(`Odd ount: ${oddNumber}`);
// console.log(`Largest Number: ${largestNumber}`);
// console.log(`Smallest Number: ${smallestNumber}`);
// console.log(`Sum: ${totalNumber}`);

// mini challenge

/*
The Mini-Challenge: Imagine you are building a shopping cart.

Create an array of 3 prices (numbers).

Create a variable called total that starts at 0.

Use a loop to add each price from your array to the total.

Use a conditional statement to check: if the total is over $100, give them a $10 discount!
*/

/*let prices = [120, 45, 80]; // Array of 3 prices
let total = 0;

for ( let i = 0; i < prices.length; i++){
  total += prices[i];

  if (total > 100){
    total -= 10;                                     THIS IS PARTIALLY CORRECT B UT  THERE IS A FLAW INSIDE THE LOOP ACCORDING TO GEMINI,  WE SHOULD CALCULATE FIRST
                                                     
  }else{
    total = total;
  }
  
} 

console.log ('total:' + total); */

// this is the correct code according to Gemini
/*let prices = [120, 45, 80];
let total = 0;

for (let i = 0; i < prices.length; i++){
  total += prices[i];
};

if (total > 100){
  total -= 10;
}
console.log(`Total: $${total}`);*/

/*
let inventory = [
  {
    name: "Bag" ,
    price: 500,
    inStock: true
  },
  {
    name: "Laptop" ,
    price: 20000,
    inStock: true
  },
  {
    name: "Wallet" ,
    price: 150,
    inStock: false
  }
]
let totalValue = 0;
for (let i = 0; i < inventory.length; i++){
  const item = inventory[i];
  if (item.inStock === true){
    totalValue += item.price;
  }
}
console.log('total value of in-stock items: ' + totalValue);
*/

//ADDING INSIDE THE ARRAY
/*let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++){

  let num = numbers[i];
  sum = sum + num;
}
  console.log(sum);
*/
// for (let i = 0; i < 5; i++){
//   let randomNumber = Math.floor(Math.random() * 5);
//   console.log(randomNumber);
// }

//  let randomNumber = Math.floor(Math.random() * 100);
//  console.log(randomNumber);

// PROFILE ACTIVITY
/*
const userprofile = {
  name: "Abdulazis",
  age: 23,
  isActive: true,
  language: ["javascript", "Python"],
  metrics: {
    project_completed: 6,
    currentEnergyLevel: "High"
  }
};

console.log("Name: ", userprofile.name);
console.log("Energy Level: ", userprofile.metrics.currentEnergyLevel)
*/

//OJT HIRING
/*const applicants = [
  { name: "Abdulazis", readyForOJT: true, completedProjects: 6 },
  { name: "John", readyForOJT: false, completedProjects: 2 },
  { name: "Maria", readyForOJT: true, completedProjects: 1 },
  { name: "Mark", readyForOJT: true, completedProjects: 5 },
  { name: "Sarah", readyForOJT: false, completedProjects: 8 }
];

for (let i = 0; i < applicants.length; i++){
  if (applicants[i].readyForOJT == true && applicants[i].completedProjects >= 4){
    console.log(applicants[i].name, " is qualified for an interview!");
  }else {
   console.log( applicants[i].name, " better luck next time!")
  }

    // console.log(applicants[i].name);
}*/

//Challenge: The E-Commerce Sales Report
/*
const sales = [
  { item: "Mechanical Keyboard", price: 85, category: "Electronics" },
  { item: "USB-C Cable", price: 12, category: "Electronics" },
  { item: "Coffee Mug", price: 15, category: "Kitchen" },
  { item: "Ergonomic Chair", price: 220, category: "Furniture" },
  { item: "Notebook", price: 8, category: "Stationery" },
  { item: "Wireless Mouse", price: 45, category: "Electronics" }
];

let totalRevenue = 0;
let vipSalesCount = 0;

sales.forEach((sale)=>{
  totalRevenue+=sale.price;
  if (sale.price >= 50){
    vipSalesCount++;
  }else{

  }
  
})
  console.log(totalRevenue);
  console.log(vipSalesCount);
  */

  //The Ultimate Challenge: The Inventory Audit
/*
  const products = [
  { name: "Laptop", price: 1200, category: "Electronics", inStock: true },
  { name: "Desk Lamp", price: 35, category: "Home", inStock: true },
  { name: "Smart Watch", price: 250, category: "Electronics", inStock: false },
  { name: "Headphones", price: 150, category: "Electronics", inStock: true },
  { name: "Office Chair", price: 180, category: "Furniture", inStock: true },
  { name: "Wireless Router", price: 80, category: "Electronics", inStock: true }
];

let totalValue = 0;
let electronics = [];
products.forEach((item)=>{
  if (item.category == "Electronics" && item.inStock){
  totalValue+=item.price
  electronics.push(item.name)
    
  }
})
console.log(totalValue)
console.log(electronics)
*/
// 1. The 'async' keyword tells JavaScript this function handles slow internet tasks
async function fetchUsers() {
  try {
    // 2. Fetch requests the data from the internet server
    // The 'await' keyword tells JS: "Pause inside this function until the network responds"
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    // 3. We convert the raw network response into a clean JavaScript Array of Objects
    const users = await response.json();
    
    // 4. YOUR TASK GOES HERE
    // console.log(users); // Look at the raw data in your console first!

    users.forEach(user => {
      console.log(user.name)
      console.log(user.email)
    });

  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

// Execute the function
fetchUsers();