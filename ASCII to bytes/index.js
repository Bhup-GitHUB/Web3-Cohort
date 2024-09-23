//1 character = 7 bits

function asciitobye(ascii){
    let bytes = [];
    for (let i = 0; i < ascii.length; i++) {
        bytes.push(ascii.charCodeAt(i));
    }
    return bytes;
}

console.log(asciitobye("Hello"));

    

//write a code for converting bytes to ascii
function byttostr(bytes){
    let str = "";
    for (let i = 0; i < bytes.length; i++) {
        str += String.fromCharCode(bytes[i]);
    }
    return str;
}

console.log(byttostr([72,101,108,108,111]));


