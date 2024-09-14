//1 character = 7 bits

function asciitobye(ascii){
    let bytes = [];
    for (let i = 0; i < ascii.length; i++) {
        bytes.push(ascii.charCodeAt(i));
    }
    return bytes;
}

console.log(asciitobye("Hello"));

