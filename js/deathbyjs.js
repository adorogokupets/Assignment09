//STEP 1
// function alphabetOrder(str) {
//     return str.split('').sort().join('')
// }
// console.log(alphabetOrder('webmaster'))

//STEP 2
// function capitalizeWords(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// }
// console.log(capitalizeWords('the quick brown fox'))

//STEP 3
// function countVowels(str) {
//     return str.match(/[aeiou]/gi).length
// }
// console.log(countVowels('The quick brown fox'))

//STEP 4
// function generateRandomId(length) {
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     let result = ''
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length))
//     }
//     return result
// }
// console.log(generateRandomId(8))

//STEP 5
function longestCountryName(countryNames) {
    return countryNames.reduce((longest, current) => current.length > longest.length ? current : longest, '')
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]))
