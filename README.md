## SEI Assignments

**Markdown Tables**

<details>
     <summary>Placeholder</summary>
<table>
<tr>
<th>html</th>
<th>js</th>
<th>css</th>
</tr>
<tr>
<td>

```html
```
</td>
<td>

```js
```
</td>
<td>

```css
```
</td>
</tr>
</table>
</details>

**[Week 1 Day 3: Loops and Conditionals](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-1/day-3/labs/loops-and-conditionals-lab/)**

**[]()**
<details>
     <summary>1. Create a loop that logs the numbers from 0-99 (ascending)</summary>

```js
for (i=0;i<100;i++)
console.log(i);
```
</details>


**[]()**
<details>
     <summary>2. Create a loop that logs the numbers from 99-0 (descending)</summary>

```js
for (i=99;i>=0;i--)
console.log(i);
```
</details>

**[]()**
<details>
     <summary>
3. Create a loop that logs the EVEN numbers from 0-98 (ascending)</summary>

```js
for (i=0;i<100;i++) {
     if (i % 2 === 0){
          console.log(i);
     }
}
```
</details>

**[]()**
<details>
     <summary>4. Create a loop that logs the EVEN numbers from 98-0 (descending)</summary>

```js
for (i=99;i>=0;i--) {
     if (i % 2 === 0){
          console.log(i);
     }
}
```
</details>



**[]()**
<details>
     <summary>5. Create a loop that logs the ODD numbers from 0-99 (ascending)</summary>

```js
for (i = 0;i <100; i++)
if(i%2 != 0){
     console.log(i);
}
```
</details>

**[]()**
<details>
     <summary>6. Create a loop that logs the ODD numbers from 99-0 (descending)</summary>

```js
for (i=100; i>=0; i--)
if(i%2 !=0){
     console.log(i);
}
```

</details>

**[]()**
<details>
     <summary>7. Create a loop that logs the numbers from 49-72 (ascending)</summary>

```js
for (i=49; i<=72; i++)
console.log(i);
```
</details>

**[]()**
<details>
     <summary>8. Create a loop that logs the numbers from 81-26 (descending)</summary>

```js
for (i = 81; i>25;i--)
console.log(i)
```
</details>

**[]()**
<details>
     <summary>9. Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)</summary>

```js
for (i = 3; i <=90;i++)
if(i%3===0){
     console.log(i)
}
```
</details>

**[]()**
<details>
     <summary></summary>

```js

```
</details>



**[Week 2 Day 1: Arrays](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-1/day-3/labs/javascript-arrays-lab/)**

<details>
     <summary>Exercise 1: Foods Array Code</summary>
    
```js
const foods = ["one", "two","three"];
console.log('Exercise 1 Result: ', foods);
```
</details>

**[]()**
<details>
     <summary>Exercise 2: Add pizza and cheeseburger using push. Which adds them to the end.</summary>

```js
foods.push("pizza", "cheeseburger");
console.log('Exercise 2 Result: ',foods);
```
</details>



**[]()**
<details>
     <summary>Exercise 3 Add the string 'taco' to the foods array so that 'taco' is the first food in the array.</summary>

```js
foods.unshift("taco")
console.log('Exercise 3 Result: ',foods);
//an uglier way to add items to the beginning of an array
foods.splice(0,0,"burritos");
console.log('Exercise 3 (ugly) Result: ',foods);

```
</details>

**[]()**
<details>
     <summary>Exercise 4 - Access the string 'pizza' with bracket notation (based upon its known position) in the foods array and assign to a variable named favFood. You should end up with a variable called favorite food that is equal to 'pizza'</summary>

```js
const favFood = foods[5];
console.log('Exercise 4 Result: ', favFood);
```
</details> 


**[]()**
<details>
     <summary>Exercise 5: Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'. (How do we add stuff to the middle of the array at a specific spot cant use push, cant use unshift)</summary>

```js
foods.splice(6,0, "tofu");
console.log('Exercise 5 Result: ', foods);
```
</details>

**[]()**
<details>
     <summary>Exercise 6: Remove the string 'pizza' in the foods array and replace it with the separate strings 'sushi' & 'cupcake'. Hmm tricky, think about what the end result should be.... yes Arthur talked about this in class. What is the intended result, pizza will be gone and instead, now sushi & cupcake will be in their instead.</summary>

```js
  let newFoods= ["sushi", "cupcake"];
  foods.splice(5,1,"sushi", "cupcake");
  console.log('Exercise 7 Result: ', foods);
```
</details>

**[]()**
<details>
     <summary>Exercise 7: Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'. Assign the new array to a variable named yummy. You should have a food array and a yummy array now starting item index number, how many you want to slice off</summary>
     
```js
let yummy = foods.slice(5,-2);
     console.log('Exercise 7 Result: ', yummy);
```
</details>
**[]()**
<details>
     <summary>Exercise 8: Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
	- Easiest question yet don't overthink it trust me.</summary>

```js
const soyIdx = foods.indexOf("tofu");
console.log('Exercise 8 Result: ', soyIdx);
```
</details>

**[]()**
<details>
     <summary>Exercise 9: Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'. Easier than it sounds.... google it</summary>

```js
const allFoods = foods.join(" -> ");
console.log('Exercise 9 Result: ', allFoods);
```
</details>

**[]()**
<details>
     <summary>Exercise 10: Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.</summary>

```js
const hasSoup = allFoods.includes("soup");
console.log('Exercise 10 Result: ', hasSoup);
```
</details>

**[]()**
<details>
     <summary>Exercise 11: Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds. Hint: Initialize the odds variable to an empty array before the iteration.</summary>

```js
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
nums.forEach(n => {
     if (n % 2!==0){
          odds.push(n);
     }
})
console.log('Exercise 11 Result: ', odds);
```
</details>

**[]()**
<details>
     <summary>Exercise 12: Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	Add to the fizz array if the number is evenly divisible by 3.
  	Add to the buzz array if the number is evenly divisible by 5.
  	Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.</summary>

```js
const fizz = [];
const buzz = [];
const fizzbuzz = [];
nums.forEach(n => {
     if (n % 3 === 0 && n % 5 === 0){
          fizzbuzz.push(n)
     } else if (n % 5 === 0){
          buzz.push(n)     
     }  else if (n % 3=== 0){
          fizz.push(n)
     }
}) 
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

```
</details>

**[]()**
<details>
     <summary>Exercise 13: Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList. Assume you don't know how many nested arrays numArrays contains.
</summary>

```js
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
let numLast = '';
numLast = numArrays[numArrays.length-1];
console.log('Exercise 13 Result: ', numLast);
```
</details>






**[]()**
<details>
     <summary>Exercise 14:
Given the above numArrays array, access the number 66 and assign to a variable named num.</summary>

```js
num = numArrays.includes('66');
num = numArrays[2][1];
console.log('Exercise 14 Result: ', num);
```
</details>

**[]()**
<details>
     <summary>Exercise 15:
Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total. Hint: Be sure to declare and initialize the total variable before the iterations.</summary>

```js
// this doesn't work. let total = '';
total = 0;
numArrays.forEach(function(n){
     n.forEach(function(i){
          total +=i
     })
})
console.log('Exercise 15 Result: ', total);
```
</details>





**[Week 2 Day 2: Functions](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-2/day-2/labs/javascript-functions-lab/)**

<details>
     <summary>1. Define a function, as a function declaration, maxOfTwoNumbers, that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression- the Math.max method is not allowed.</summary>
    
```js
function maxOfTwoNumbers(num1, num2) {
     if (num1>=num2) {
          console.log(num1)
     } else (console.log(y))
}
```
</details>

<details>
     <summary> 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.</summary>
    
```js
const maxOfThree = (num1, num2, num3) => {
     if ((num1>=num2) && (num1>=num3)) {
          console.log(num1)
     } else if ((num2>=num3) && (num2>=num1)) {
          console.log(num2)
     } else {
          console.log(num3)
     }
}
maxOfThree(12,200,3)
```
</details>

<details>
     <summary>5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.</summary>
    
```js
function maxOfTwoNumbers(num1, num2) {
     if (num1>=num2) {
          console.log(num1)
     } else (console.log(y))
}
```
</details>

<details>
     <summary>3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.</summary>
    
```js
function isCharAVowel(char){
     let vowel = ['a','e','i','o','u']
     char = char.toLowerCase()
     for (i = 0; i< vowel.length;i++) {
          if (char != vowel[i]) {
               continue
          }
          return true
     }
     return false;
}

console.log(isCharAVowel("j"));

```
</details>

<details>
     <summary>4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.</summary>
    
```js
let arr1 = [2,4,5];
const sumArray = (array)=> {
	let total = 0;
	for (let i = 0;i<array.length;i++) {
		total+=arr1[i];
	}
return total
}
console.log(sumArray(arr1));
```
</details>

<details>
     <summary>5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.</summary>
    
```js
let arr1 = [2,4,5];
const sumArray = (array)=> {
	let total = 1;
	for (let i = 0;i<array.length;i++) {
		total*=arr1[i];
	}
return total
}
console.log(sumArray(arr1));
```
</details>

<details>
     <summary>6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.</summary>
    
```js
function func2(a, b,c,d,e,f,g,h,i) {}
console.log(func2.length);
```
</details>

<details>
     <summary>7. Define a function, as a function declaration, reverseString, that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor"</summary>
    
```js
function reverseString(string) {
     let reversedString = string.split('')
     reversedString.reverse();
     return reversedString
}
console.log(reverseString('abcde'))
```
</details>

<details>
     <summary>8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.</summary>
    
```js
function findLongestWord(str) {
     var strSplit = str.split(' ');
     var longestWord = 0;
     for(var i = 0; i < strSplit.length; i++){
       if(strSplit[i].length > longestWord){
        longestWord = strSplit[i].length;
        }
     }
     return longestWord;
   }
   console.log(findLongestWord("The quick brown fox jumped over the lazy dog panagram"));
```
</details>




**[Week 2 Day 3: CSS](https://replit.com/@ArthurBernier/Flexbox-Repl#README.md)**

<details>
     <summary>CSS Code</summary>
    
```js

```
</details>

**[Week 3 Day 1: Hamburger Menu](https://replit.com/@MichaelOb89/PopularYummyResearch#style.css)**

<details>
     <summary>Hamburger Menu Code</summary>
    
```
html, body {
  height: 100%;
  width: 100%;
}
.navigation-checkbox{
  display: none;
}
.navigation-label{
  background-color: goldenrod;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 2000;
  text-align: center;
  cursor: pointer;
}
.navigation-label>span{
  position: relative;
  margin-top: 17.5px;
}
.navigation-label>span, .navigation-label>span::before, .navigation-label>span::after{
  width: 15px;
  height: 2px;
  background-color: ghostwhite;
  display: inline-block;
}

.navigation-label>span::before, .navigation-label>span::after {
  content: "";
  position: absolute;
  left: 0;
  transition: all 1.5s;
}
.navigation-label>span::before{
  top:-4px;
}
.navigation-label>span::after{
  top:4px;
}
.navigation-checkbox:checked + .navigation-label>span{
  background-color: transparent;
}

.navigation-checkbox:checked + .navigation-label>span::before{
  top:0;
  transform: rotate(495deg);
}

.navigation-checkbox:checked + .navigation-label>span::after{
  top:0;
  transform: rotate(-495deg);
}

.navigation-checkbox ~ nav {
  display: none;
  transition: all 2s;
}

.navigation-checkbox:checked ~ nav{
  display: block;
}
<!--  -->

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
 <input type="checkbox" class="navigation-checkbox" id="nav-checkbox">
  <label for="nav-checkbox" class="navigation-label">
    <span>&nbsp;</span>
  </label>
  <div class="navigation-background">&nbsp;</div>
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact us</li>
    </ul>
  </nav>
  <script src="script.js"></script>

 <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
  <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> 
</body>

</html>
```

</details>

**[Week 3 Day 2: Classes Lab](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-3/day-2/labs/javascript-classes-lab/)**

* Give the class at least 3 properties
* Give the class at least 3 methods
* Create two instances of the class (two cats)
* Log both instances to see their properties
* Invoke each method from both instances
* Create 3 properties that are set by the constructor
* Create 3 methods
* Instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
* Loop over each array and print 3 properties of each pirate


<details>
     <summary>Classes Code</summary>

```js
class Crystal {
     constructor (favoriteShape, favoriteFood, superPower) {
          this.favoriteShape = "hexagon";
          this.favoriteFood = "pizza";
          this.superPower = "joy";
     }
          meditateToday (am) {
               console.log("i did 7am" + this.favoriteShape);
          }
          workedOut () {
               console.log('did bOdi!');
          }
          meditatedTonight (pm) {
               
               console.log('i did 6pm!');

          }

     }
```
</details>

**[Week 3 Day 3: DOM Menu](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-3/day-3/lab)**

<details>
     <summary>DOM Menu Code</summary>

```
<DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <h1>Help TTT</h1>
</head>
<body>
     <header>
       <nav id="top-menu"></nav>
      <!-- Add the <nav> element below -->
  <nav id="sub-menu"></nav> 
     </header>
     <main></main>
     <script src="script.js"></script>
     <link rel="stylesheet" href="style.css" />
   </body>
</html>

* {
     box-sizing: border-box;
}

:root {
     --main-bg: #4a4e4d;
     --top-menu-bg: #0e9aa7;
     --sub-menu-bg: #3da4ab;
}

body {
     font-family: Tahoma,Geneva,sans-serif;
     height: 100vh;
     margin: 0;
     display: grid;
     grid-template-rows: 3rem auto;
     color:antiquewhite;
}

flex-ctr {
     display: flex;
     justify-content: center;
     align-items: center;
}

.flex-around {
     display: flex;
     justify-content: space-around;
     align-items: center;
}
nav a {
     line-height: 3rem;
     padding: 0 1rem;
     text-transform: uppercase;
     text-decoration: none;
     color: blanchedalmond;
}

#top-menu a:hover {
     background-color: var(--sub-menu-bg);
}
header, #top-menu {
     position: relative;
   }
   
   #top-menu {
     z-index: 20;
   }
   
   #sub-menu {
     width: 100%;
     z-index: 10;
     transition: top 0.5s ease-out;
   }
   
   #sub-menu a:hover {
     background-color: var(--top-menu-bg);
   }
   
   nav a.active {
     background-color: var(--sub-menu-bg);
     color: var(--main-bg);
   }

```

</details>

**[Week 3 Day 3: DOM Menu Part 2](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-3/day-3/hw)**

<details>
     <summary>DOM Part 2 Code</summary>
Code Here
</details>

**[Week 5 Day 1: Algo Challenge](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-5/day-1/labs/algo-instructions)**

<details>
     <summary>Algo Code</summary>
Code Here
</details>

<details>
     <summary>Part 1: Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.</summary>

```js
function capitalize(str) {
     return str.replace(
       /\w\S*/g,
       function(txt) {
         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
       }
     );
   }
   
let strArr = "a happy go luchy gal on the go!"
console.log(capitalize(strArr))
```
</details>

<details>
     <summary>Part 2: Then create the corresponding HTML that would make the code below function as follows...as a user when I go to the html page i see an input field marked ENTER WORD TO CAPITALIZE. When a user enters a word to capitalize and then clicks the CAPITALIZE button. The field below prints out the CAPITALIZED Word in the browser
</summary>
<table>
<tr>
<th>HTML</th>
<th>JS</th>
</tr>
<tr>
<td>

```html
<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script type="text/javascript" defer src="server.js" defer></script>
</head>
<body>
     <h5>Part 2: Then create the corresponding HTML</h5>
     <br></br>
     <div>
          <input type="text" id="inputText" value="Here is were your Text Input goes">
          <button id="submitButton">Button</button>
     </div>
     <br></br>
     <div id="outputText"></div>
</body>
</html>
```
</td>
<td>

```js
function capitalize(str) {
     return str.replace(
       /\w\S*/g,
       function(txt) {
         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
       }
     );
   }
const discard = document.querySelector('#submitButton');
const eventFunction = (event) => {
     const inputText = document.querySelector('#inputText').value;
     const outputText = document.querySelector('#outputText')
     inputText.textContent;
     outputText.innerHTML = capitalize(inputText)
     outputText
}
discard.addEventListener('click', eventFunction);

```
</td>
</tr>
</table>
</details>


<details>
     <summary>Algo Code</summary>
Code Here
</details>

**[Week 5 Day 2: Algo Challenge](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-5/day-2/algo-instructions)**

<details>
     <summary>Algo Challenge #2 Code</summary>
Code Here
</details>

**[Week 5 Day 2: Barbie's Wardrobe](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-5/day-2/walkthrough)**

<details>
     <summary>HTML</summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Barbie's Wardrobe</title>
</head>
<body>
    <div id="container">
        <div class="box-1">
          <img src="https://i.imgur.com/M6TTSui.jpg" class="box-image">
        </div>
        <div class="box-2">
          <h1 class="info">Barbie</h1>
          <p><i>- Living the dream since 1959</i> </p>
        </div>
      </div>
      
    <div id="barbie">
    </div>
    <div class="button-container">
        <button id="birkin">Buy Birkin</button>
        <button id = "red-bottoms">Buy Red Bottoms</button>
        <button id="work">Get Paid</button>
        <button id = "rental">Invest in a rental</button>
    </div>
 
    
    <script src="app.js"></script>
</body>
</html>
```
</details>
<details>
     <summary>CSS</summary>

```css
body {
    background-color: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
}
#red-bottoms:hover {
  background-color: red;
}


@import url(https://fonts.googleapis.com/css?family=Montserrat);

.box-1 {
  height:175px;
  background: #FE529E;
  position: relative;
  border-radius: 15px;
}

img {
  border-radius: 80%;
  position: relative;
  top: 10px;
  right: 20px;
  float: right;
}

.box-2 h1 {
  position: relative;
  bottom: 160px;
  left: 35px;
  color: #F6F2E9;
  font-family: 'Montserrat', sans-serif;
}

.box-2 p {
  position: relative;
  color:#F6F2E9;
  bottom: 150px;
  left: 30px;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
}

#container {
  width:400px;
  height:200px;
  background: #A03ACC;
  border-radius: 15px;
  position: relative;
};


```
</details>

<details>
     <summary>JS</summary>
     
```js
console.log('App is connected');

// Protagonist of our application
const barbie = {
    name: 'Barbie',
    wardrobe: [],
    assets: [],
    wallet: 0
}


class Career {
    constructor(name, description, income, id){
        this.name = name;
        this.description = description;
        this.income = income;
        this.id = id;
    }
}

const careerDescriptions = [
    {
        name: 'lawyer',
        description: 'works as an attorney of a high end law firm'
    },
    {
        name: 'software-engineer',
        description: 'solves software related problems and build application architecture.'
    },
    {
        name: 'doctor',
        description: 'helps people with their boo boos'
    },
    {
        name: 'influencer',
        description: 'talk about stuff on social media and people say wow and i get paid'
    }
]
const careerIncomes = [
 8501,
 18501,
 2850,
 3850,
 4850,
 5850,
 6850
];
const careers = [];


const randomization = (limit) => {
 return Math.floor(Math.random() * limit)
}

const randomPrice = (price) => {
//range 0.7 -2.0 this is very important
return price * ((Math.random() *1.3) + 0.7)
}

for (let i = 10 ; i > 0; i--){
 const job = careerDescriptions[randomization(careerDescriptions.length)]
 const income = careerIncomes[randomization(careerIncomes.length)];
 careers.push(new Career(job.name, job.description, income, `${job.name}-${income}` ))
}


barbie.career = careers[randomization(careers.length)]

class Clothing {
    constructor(name, designer, color, type, size, price){
        this.name = name;
        this.designer = designer;
        this.color = color;
        this.type = type;
        this.size = size;
        this.price = price;
    }
}

const birkin = new Clothing('Birkin Bag', 'Hermes', 'purple', 'bag', 'lg', 15470 )
const redBottoms = new Clothing('Red Bottoms', 'Christian Loubitin', 'black', 'shoes', '4', 800)
class Asset {
    constructor(name, value, cashFlow, color){
        this.name = name;
        this.value = value;
        this.cashFlow = cashFlow;
        this.color = color;
    }
}

const rental = new Asset('Rental Property', 50000, 500, 'pink')

// Game Screen

barbie.el = document.getElementById('barbie');

barbie.render = () => {
    barbie.el.innerHTML = `
    <h1>${barbie.name} Status</h1>
    <h3>${barbie.name} works as a ${barbie.career.name} </h3>
    <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
    <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    <div> <h2>Wardrobe Contains: </h2> 
    <ul>${
        barbie.wardrobe.map(((item, index) => {
            return `<li key="${index}" class="wardrobe-item" price="${randomPrice(item.price)}">
            ${barbie.name} has a ${item.color} 
            ${item.name} made by ${item.designer}
            that is worth ${item.price} in size 
            ${item.size}
            <button class="sell">Sell ${item.name}</button> 
            </li>`
        })).join('')
    }</ul>
    </div>
    <div> <h2>Assets Are: </h2> 
    <ul>${
        barbie.assets.map(((item, index) => {
            return `<li>
            ${barbie.name} has a ${item.color} 
            ${item.name} 
            that is worth ${item.value}
            </li>`
        })).join('')
    }</ul>
    </div>
`;
const wardrobeButtons = document.querySelectorAll('.wardrobe-item > .sell')
wardrobeButtons.forEach((button) => {
    button.addEventListener('click', ()=> {
        barbie.wallet += parseInt(button.parentNode.getAttribute('price'))
        barbie.wardrobe.splice(button.parentNode.getAttribute('key'), 1)
        button.parentNode.remove()
        barbie.render()
    })
})
}
barbie.render()



// Button Event Listeners




const rentalButton = document.getElementById('rental');

rentalButton.addEventListener('click', () => {
    if(barbie.wallet >= rental.value){
        barbie.assets.push(rental)
        barbie.wallet -= rental.value 
        barbie.career.income += rental.cashFlow
        barbie.render()
    } else {
        alert('This is a good decision unfortunately it is not your season yet sis')
    }
})



const redButton = document.getElementById('red-bottoms');

redButton.addEventListener('click', ()=> {
    if (barbie.wallet >= redBottoms.price) {
        barbie.wardrobe.push(redBottoms);
        barbie.wallet -= redBottoms.price;
        barbie.render()
    } else {
        alert("Girl,you need to re-evaluate what you are doing!")
    }
})

const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', ()=>{
    if(barbie.wallet >= birkin.price){
        barbie.wardrobe.push(birkin);
        barbie.wallet -= birkin.price;
        barbie.render();
        // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    } else {
        alert('Stop trippin you know you aint got it like that');
    }

})

const workButton = document.getElementById('work');

workButton.addEventListener('click', ()=>{
    barbie.wallet += barbie.career.income; // WE updated the wllet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    barbie.render();
})
```
</details>





**[Week 5 Day 2: Modals](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-5/day-3/modal/)**

<details>
     <summary>Modal Code</summary>
Code Here
</details>

**[Week 5 Day 2: Carousel](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-5/day-3/corgi/)**

<details>
     <summary>Carousel Code</summary>
Code Here
</details>

**[Week 5 Day 2: Tomagotchi Code Along](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-5/day-3/tomogatchi/)**

<details>
     <summary>Tamogatchi Code</summary>
Code Here
</details>

**[Week 5 Day 2: Classes](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-5/day-3/classes)**

<details>
     <summary>Classes Code</summary>
Code Here
</details>

**[Week 6 Day 1](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-6/day-1/landscaper)**

**Landscaper**

<details>
     <summary>HTML</summary>

```html

```
</details>
<details>
     <summary>CSS</summary>

```css

```
</details>

<details>
     <summary>JS</summary>

```js

```
</details>

**[Week 6 Day 2: Unit One Cheatsheet](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-5/day-1/labs/group)**

<details>
     <summary>Unit One Cheatsheet Code</summary>
Code Here
</details>

**[Week 6 Day 2: Save the Universe](https://sfs-flex-evelyn.herokuapp.com/frontend-fundamentals/week-6/day-2/hw)**

<details>
     <summary>Save the Universe Code</summary>
Code Here
</details>


### Unit 2 Assignments

**[Week 9 Day 2: Trivia](https://sfs-flex-evelyn.herokuapp.com/backend-fundamentals/week-9/day-2/test)**

**[Week 9 Day 3: Markdown](https://sfs-flex-evelyn.herokuapp.com/backend-fundamentals/week-9/day-3/markdown)**

**[Week 10 Day 1](https://sfs-flex-evelyn.herokuapp.com/backend-fundamentals/week-10/day-1/)**

<details>
     <summary>Status Codes</summary>

Written HW #2 What do the HTTP Status Codes represent?, What are the Primary HTTP Verbs and what do they mean? Submit via markdown Due Saturday
</details> 

**[Week 10 Day 1: Take one Down](https://sfs-flex-evelyn.herokuapp.com/backend-fundamentals/week-10/day-1/hw)**

<details>
     <summary>Take One Down Code</summary>
Code Here
</details>

**[Week 10 Day 3: Express HW](https://sfs-flex-evelyn.herokuapp.com/backend-fundamentals/week-10/day-1/hw)**
<details>
     <summary>Express HW</summary>
Code Here
</details>

**[Week 10 Day 3: Vegetables](https://sfs-flex-evelyn.herokuapp.com/backend-fundamentals/week-10/day-3/hw)**
<details>
     <summary>Vegetables Code</summary>
Code Here
</details>

**[Week 11 Day 2: Mongo Video](https://www.youtube.com/watch?v=-56x56UppqQ)**
<details>
     <summary>Classes Code</summary>
Code Here
</details>

**[Week 11 Day 3: Captain's Log](https://sfs-flex-evelyn.herokuapp.com/backend-fundamentals/week-11/day-3/hw)**
<details>
     <summary>Captain's Log Code</summary>
Code Here
</details>

**[Week 11 Day 3: Poke Express](https://sfs-flex-evelyn.herokuapp.com/backend-fundamentals/week-11/day-3/pokemon)**
<details>
     <summary>Poke Express Code</summary>
Code Here
</details>

**[Week 12 Day 2: Fruits]()**
<details>
     <summary>Fruits Code</summary>
Code Here
</details>

**[Week 12 Day 3: Written Homework - Answer The Following](https://sfs-flex-evelyn.herokuapp.com/backend-fundamentals/week-12/day-3/)**


**[]()**
<details>
     <summary></summary>

```js

```
</details>


**[Written HW: Week 18 Day 1](https://sfs-flex-evelyn.herokuapp.com/react/week-18/day-1/)**

* Review the [React Beta Docs Quick Start](https://beta.reactjs.org/learn)

* Look at the [Counter Example](https://codesandbox.io/s/prod-glade-z46mqe) in particular and the accompanying diagram
* Explain what you believe is happenning in 100 words or less
* Submit your answer in a github markdown.

<details>
     <summary>Counters</summary>
<table>
<tr>
<th>update separately</th>
<th>update together</th>
</tr>
<tr>
<td>

```js
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}


```
</td>
<td>

```js
import { useState } from 'react';

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

```
</td>

</tr>
</table>
</details>

**[Map Function]()**
<details>
     <summary></summary>

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); 
```
</details>

**[Filter Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)**
<details>
     <summary></summary>

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
```
</details>
**[]()**
<details>
     <summary></summary>

```js

```
</details>
**[]()**
<details>
     <summary></summary>

```js

```
</details>


**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js

```
</details>




**[]()**
<details>
     <summary></summary>

```js
alert("js rocks Yes!");
// Task 5.0 Update the menuLinksarray in script.js to this:
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];;
// Task 1.0 Select and cache the <main>element in a variable named mainEl.
var mainEl = document.querySelector('main');


// Task 1.1 
//Set the background color of mainEl to the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks! Just like it does at the HardRock cafe</h1>';

// Task 1.3
// Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr');

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
var topMenuEl = document.getElementById('top-menu');

// Task 2.1
// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = '100%';

// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
// Add a class of flex-aroundto topMenuEl.
topMenuEl.classList.add('flex-around');

// Task 3.1 Iterate over the entire menuLinksarray and for each "link" object:



// menuLinks.forEach(function(aEl){
//   // step 1 add an href attribute 
//   let aEl = document.createElement('a');
//   // step 2 set its value set to the hrefproperty of the "link" object
//     aEl.setAttribute('href', link.href);
// //step 3 Set the new element's content to the value of the text property of the "link" object.
//   aEl.textContent = link.text;
//   // Append the new element to the topMenuElelement.
//   topMenuEl.appendChild(aEl)
// })


menuLinks.forEach(function(link){
    let aEl = document.createElement('a');
    aEl.setAttribute('href', link.href);
    aEl.textContent = link.text;
    topMenuEl.appendChild(aEl)
})

// Arthur's alternate solution to part 3
// var aboutEl = document.createElement('a')
// aboutEl.setAttribute('href', menuLinks[0].href);
// aboutEl.textContent = menuLinks[0].text;
// topMenuEl.appendChild(aboutEl);

//Task 4.0 Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

var subMenuEl = document.getElementById('sub-menu');


//Task 4.1 Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%';

// Task 4.2 Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3
// Add the class of flex-aroundto the subMenuElelement.
subMenuEl.classList.add('flex-around');

// Task 4.4
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks.
var topMenuLinks = document.querySelectorAll('#top-menu a');

// Declare a global showingSubMenu variable and initialize it to false;
var showingSubMenu = 'false';

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(evt) {
// The first line of code of the event listener function should call the event object's preventDefault()method.
  evt.preventDefault();
  // The second line of code function should immediately return if the element clicked was not an <a>element.
var link = evt.target;
// console.log the content of the <a>to verify the handler is working.
if(link.tagName !== 'A') return;
console.log(link.textContent);
// Progress Check
// Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.
// Clicking anywhere other than on a link should do nothing.
// Task 5.3 Next in the event listener, if the clicked <a>link has a class of active:
// Remove the activeclass from the clicked <a>element.
if (link.classList.contains('active')){
  link.classList.remove('active');
// Set the showingSubMenuto false.
showingSubMenu = 'false';
// Set the CSS top property of subMenuElto 0.
subMenuEl.style.top = '0';
// returnto exit the handler.
return;
}
// Task 5.4
// Next, the event listener should remove a class name of active from each <a>element in 
// topMenuLinks whether the activeclass exists or not.
// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
topMenuLinks.forEach(function(link){
  link.classList.remove('active')
});
// Task 5.5
// Next, the event listener should add a class name of active to the <a>element that was clicked.
link.classList.add('active');
// Task 5.6
// Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinkshas 
// a subLinksproperty (all do, except for the "link" object for ABOUT), 
// otherwise, set it to false.
// Hint variable linkObj
var linkData = menuLinks.find(function(linkObj){
return linkObj.text === link.textContent;
});
showingSubMenu = 'subLinks' in linkData;
//Task 6.4 Not underestanding this. 
// If the ABOUT link is clicked, an <h1>about</h1>should be displayed.
if (!showingSubMenu) mainEl.innerHTML = '<h1>${link.textContent}</h1>';

//5.7a if showingSubMenu = 'true', build a sub menu function passing it to the 
//sub array for the clicked <a> element
if (showingSubMenu) {
  buildSubMenu(linkData.subLinks);
// 5.7b set the css <top> of subMenuEl to 100%
  subMenuEl.style.top = '100%';
//5.7c if showing submenu is false set the top property to 0.
} else {
  subMenuEl.style.top = '0%';
}
});


// Task 5.8
// Code the buildSubMenufunction so that it:
function buildSubMenu(subLinks){
// 5.8a Clears the contents of subMenuEl.
subMenuEl.innerHTML = '';
// Iterates over the subLinksarray passed as an argument; and for each "link" object:
subLinks.forEach(function(link) {
// Create an <a>element.
var linkEl = document.createElement('a');
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
linkEl.setAttribute('href', link.href);
// Set the new element's content to the value of the textproperty of the "link" object.
linkEl.textContent = link.text;
// Append the new element to the subMenuElelement.
subMenuEl.appendChild(linkEl);
});
}

// Task 6.0
// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function(evt){
  // The first line of code of the event listener function should call the event 
  // object's preventDefault() method.
evt.preventDefault();
// The second line of code function should immediately return if the element clicked 
//was not an <a>element.
var link = evt.target;
if (link.tagName !== 'A') return 
  // console.logthe content of the <a>to verify the handler is working.
console.log(link.textContent);
// Task 6.1 Next, the event listener should set showingSubMenuto false.
showingSubMenu = false;
// Set the CSS topproperty of subMenuElto 0.
subMenuEl.style.top = '0';
// Task 6.2 remove the class name of activefrom each <a>element in 
//topMenuLinks- whether the activeclass exists or not.
topMenuLinks.forEach(function(link) {

  link.classList.remove('active');
  });
  // Task 6.3 Update the contents of mainElto the contents of the <a>element, 
// within an <h1>, clicked within subMenuEl.
mainEl.innerHTML = '<h1>${link.textContent}</h1>';

})

// Task 6.4
// If the ABOUT link is clicked, an <h1>about</h1>should be displayed.

```
</details>





