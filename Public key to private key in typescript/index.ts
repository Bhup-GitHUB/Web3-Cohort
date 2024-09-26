import * as ed from '@noble/ed25519';

async function main() {
    try {
        const privateKey = ed.utils.randomPrivateKey(); // Generate a secure random private key
        const message = new TextEncoder().encode("Hello World"); // Convert the "Hello World" to Uint8Array
        const publicKey = await ed.getPublicKey(privateKey); // Generate public key from private key
        const signature = await ed.sign(message, privateKey); // Sign the message with private key
        const isValid = await ed.verify(signature, message, publicKey); // Verify the signature with public key
        
        console.log("Private Key:", Buffer.from(privateKey).toString('hex'));
        console.log("Public Key:", Buffer.from(publicKey).toString('hex'));
        console.log("Signature:", Buffer.from(signature).toString('hex'));
        console.log("Signature valid:", isValid); // true if valid
        // From private key you can get public key, not vice versa
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();