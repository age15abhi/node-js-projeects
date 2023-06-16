const {writeFileSync} = require('fs');

for(let a = 0 ; a<100000 ; a++){
    writeFileSync('./content/big.txt' ,`Abhishek ${a}\n` , {flag : 'a'})
}