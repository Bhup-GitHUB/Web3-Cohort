//What if I ask you the following question — 
//Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?


const crypto = require('crypto');

function findhashwithPrefix(prefix){
    let input=0;
    while(true){
        let inputstring = input.toString();
        let hash = crypto.createHash('sha256').update(inputstring).digest('hex');
        if(hash.startsWith(prefix)){
            return {input: inputstring , hash: hash};
        }
        input++;
    }
}

const result = findhashwithPrefix("00000");
console.log("Input:"+result.inpustring)
console.log("Hash:"+result.hash)
