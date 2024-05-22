//STEP 1
// let name = prompt("Please enter your name:")
// alert("The length of your name is: " + name.length)

//STEP 2
// let name = prompt("Please enter your name:")
// let index = prompt("Enter a numeric value to find the letter at that position:")
// alert("The letter at position " + index + " is: " + name.charAt(index - 1))

//STEP 3
// let firstName = prompt("Please enter your first name:")
// let lastName = prompt("Please enter your last name:")
// alert(`Your name is: "${firstName} ${lastName}`)

//STEP 4
// let text = "The quick brown fox jumps over the lazy dog"
// let index = text.indexOf("fox")
// alert(`The index of the word 'fox' is: ${index}`)

//STEP 5
// let text = "The quick brown fox jumps over the lazy fox"
// let index = text.lastIndexOf("fox")
// alert(`The last index of the word 'fox' is: ${index}`)

//STEP 6
// let text = "The quick brown fox jumped over the lazy dog"
// let fullName = prompt("Please enter your full name:")
// let newText = text.replace("the lazy dog", fullName)
// alert(newText)

//STEP 7
// let text = "The quick brown fox jumps over the lazy dog"
// let word = prompt("Please enter a word to search for:")
// let foundIndex = text.indexOf(word)
// if (foundIndex !== -1) {
//     alert("The word '" + word + "' was found at index: " + foundIndex)
// } else {
//     alert("The word '" + word + "' was not found in the string.")
// }

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog"
// let new_string = old_string.slice(old_string.indexOf("the lazy dog"))
// alert(new_string.toUpperCase())

//STEP 9
// let text = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
// let trimmedText = text.trim()
// alert(trimmedText.toLowerCase())

//STEP 10
let text = "the quick brown fox jumps over the lazy dog"
let capitalizedText = text.charAt(0).toUpperCase() + text.slice(1)
alert(capitalizedText)
