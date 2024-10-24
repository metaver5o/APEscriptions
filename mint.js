const { ethers } = require("ethers");
const fs = require('fs');

// Read environment variables
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

// Read base64 data from file
let dataToMint;
try {
    dataToMint = fs.readFileSync('/usr/src/app/data/base64_image.txt', 'utf8');
    console.log("Successfully read the base64 file.");
} catch (error) {
    console.error("Error reading the base64 file:", error);
    process.exit(1);
}

const main = async () => {
    console.log("TX_VALUE:", process.env.TX_VALUE);  // Debug the value

    if (!dataToMint) {
        console.error("Error: dataToMint is undefined or empty.");
        process.exit(1);
    }

    // Convert base64 data to a Uint8Array (byte array)
    const buffer = Buffer.from(dataToMint, 'base64');

    const tx = {
        to: process.env.RECIPIENT_ADDRESS,
        value: ethers.utils.parseEther(process.env.TX_VALUE),
        data: '0x' + buffer.toString('hex'),
        gasPrice: ethers.utils.parseUnits('20', 'gwei'),  // Adjust gas price if necessary
    };

    try {
        // Estimate the required gas for the transaction
        const gasEstimate = await wallet.estimateGas(tx);
        tx.gasLimit = gasEstimate;  // Dynamically set the gas limit

        const response = await wallet.sendTransaction(tx);
        console.log("Ethscription transaction details:", response);
    } catch (error) {
        console.error("Transaction failed:", error);
    }
};

main();