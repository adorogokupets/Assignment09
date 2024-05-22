//STEP 1
// let month = prompt("Enter a month (1-12)")
// let year = prompt("Enter a year (e.g., 2023)")
// let daysInMonth = new Date(year, month, 0).getDate()
// console.log(`Number of days in the month: ${daysInMonth}`)

//STEP 2
// let dateString = prompt("Enter a date (YYYY-MM-DD)")
// let date = new Date(dateString)
// let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// let monthName = monthNames[date.getMonth()]
// console.log(`Month name: ${monthName}`)

//STEP 3
// let dateString = prompt("Enter a date (YYYY-MM-DD)")
// let date = new Date(dateString)
// let isWeekend = (date.getDay() === 0 || date.getDay() === 6)
// console.log(`Is the date a weekend? ${isWeekend}`)

//STEP 4
// let today = new Date()
// let yesterday = new Date(today)
// yesterday.setDate(today.getDate() - 1)
// let weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// console.log("Yesterday was: " + weekdayNames[yesterday.getDay()])

//STEP 5
let today = new Date()
let weekdayFirstLetter = today.toString().charAt(0)
console.log(`First letter of today: ${weekdayFirstLetter}`)