import * as ed from '@noble/ed25519';
async function main() {
    const privateKey = ed.utils.randomPrivateKey(); //gernate a secure random private key
    const message = new TextEncoder().encode("Hello World"); //convert the"hello world in unit8 array;
    const publicKey = await ed.getPublicKey(privateKey); //gernates public key from private key
    const signature = await ed.sign(message, privateKey); //sign the message with private key
    const isValid = await ed.verify(signature, message, publicKey); //verify the signature with public key
    console.log(isValid); //true if valid
    //from private u can get public key not vice versa
}
main();