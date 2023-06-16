const { readFileSync , writeFileSync} = require('fs')


// this is for read the file
const first = readFileSync('./content/first.txt' , 'utf8')
const second = readFileSync('./content/second.txt' , 'utf8')

console.log(first , second)

// this is for write the file from another file
writeFileSync('./content/result-sync.txt' , `Here is the result ${first} , ${second}` , {flag:'a'})
