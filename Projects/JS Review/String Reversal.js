// Leon Scott: 5/13/19.... yea so lets reverse a string :)

// hmmmm wonder what this would say backwards -___-
var revMe = "star relived"
var meRev = ""

// reverse incrimentation of the length-of the revMe string for loop
for (var i = revMe.length-1; i > 0 ; i--){

  // assigning revMe characters to meRev slots in reverse order by adding characters into single string
  meRev += revMe[i]
}

// printing both orignial and reveresd strings to console
console.log(`original string: ${revMe}`)
console.log(`reveresed string: ${meRev}`)
console.log('Oh would you look at that! lol ')
