let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
  if (index < 4) {
     return {num, index}
  }
})

console.log(filteredNumbers)