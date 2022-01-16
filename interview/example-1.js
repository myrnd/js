/** If string is sayeedGouse convet to sayeed_gouse vice versa */
function foo(str) {
  if (str.indexOf('_') > -1) {
    let arr = str.split('_')
    let firstWord = arr.shift(0)
    arr = arr.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return [firstWord, ...arr].join('')
  } else {
    let arr2 = str.split('')
    arr2 = arr2.map((letter) => {
      if (letter.toUpperCase() === letter) {
        return '_' + letter.toLowerCase()
      }
      return letter
    })
    return arr2.join('')
  }
}
console.log(foo('sayeed_gouse'))
