//npm - global command , comes with node
// npm --version

//local dependency - use it only in this particular project
// npm i <pakageName>

// global dependency - use it in any project
// npm install -g <pakageName>
// sudo npm  install -g <pakagename>  (mac) 


// package.json - manifest file (store inportant info about project / pakage)
// manual approach - (create pakage.json in the root , create properties etc.)
// npm init (step by step press enter to skip)
// npm init -y (everthing default)

const _ = require('loadsh')

const Items = [1, [2, [3, [4, [5, [6]]]]]]

const newItems = _.flattenDeep(Items)
console.log(newItems)
console.log('hello people')