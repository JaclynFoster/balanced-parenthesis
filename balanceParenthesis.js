// Given a string, return true or false depending on whether 
//that string has balanced parentheses.

// For the purposes of this problem, you only need 
//to worry about parentheses ( and ), not other
// opening-and-closing marks, like curly brackets, 
//square brackets, or angle brackets.

// For example:

// >>> has_balanced_parens("()")
// // true

// >>> has_balanced_parens("(Oh Noes!)(")
// // false

// >>> has_balanced_parens("((There's a bonus open paren here.)")
// // false

// >>> has_balanced_parens(")")
// // false

// >>> has_balanced_parens("(")
// // false

// >>> has_balanced_parens("(This has (too many closes.) ) )")
// // false
// You may consider a string with no parentheses balanced:

// >>> has_balanced_parens("Hey...there are no parens here!")
// // true

const balanceParens = str => {
  let closeP = ''
  let openP = ''
  let newStr = str.replace(/[^()]/gi, '')
  console.log(newStr)
  for (let i = 0; i < newStr.length; i++) {
    let paren = newStr[i]

    if (paren === '(') {
      openP += paren
      console.log('openP', openP)
    } else if (paren === ')') {
      closeP += paren
      console.log('closeP', closeP)
    }
  }
  if (openP.length !== closeP.length) {
    return false
    console.log('false')
  } else {
    return true
    console.log('true')
  }
}

console.log(balanceParens('(This has (too many closes).))'))

