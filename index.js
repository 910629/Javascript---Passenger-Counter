// document.getElementById("count").innerText = 5

// let count = 5

// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0
let totalCount = 0
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

let totalEl = document.getElementById("total-el")


function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    let displ = count + " - "
    saveEl.textContent += displ
    totalCount += count
    count = 0
    countEl.textContent = 0
    totalEl.textContent = "Total passengers: " + totalCount
}




// // 1. Create a variable, myAge, and set its value to your age
// let myAge = 32

// // 2. Log the myAge variable to the console
// console.log(myAge)

// // 3. Create variable humanDogratio
// let humanDogratio = 7

// // 4. Multiply myAge and humanDogratio together & store result as myDogAge
// let myDogAge = myAge * humanDogratio

// // 5. Log myDogAge to console
// console.log(myDogAge)

// // Create increment function
// function increment() {
//     console.log("The increment button was clicked")
// }

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function fortyTwo() {
//     console.log(42)
// }

// fortyTwo()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// Create a function that logs out the sum of all the lap times
// function lapSum() {
//     console.log(lap1 + lap2 + lap3)
// }

// lapSum()

// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times
// function incrementOnce() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementOnce()
// incrementOnce()
// incrementOnce()


// console.log(lapsCompleted)