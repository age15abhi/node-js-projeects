// CommonJS , every file is module by default
const names = require('./3_module')
const sayhy = require('./4_module')
// const data = require('../6_alternative_flavour')
require('./7_mind_grenede')

console.log(names)

sayhy(names.john)
sayhy(names.peter)
sayhy(secret)