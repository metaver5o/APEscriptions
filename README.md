# APEscriptions - ordinals like ethscriptions @ apechain CURTIS TESTNET


APEscription is a decentralized application (dApp) that enables you to create NFTs similar to Ethscriptions on Apechain, Yuga Labs' fork.

With this application, you can inscribe data (images, music, video, etc.) onto the Apechain network using the Ethscriptions-like method.

## Features
- Inscribe files as NFTs on Apechain using Ethscriptions-like methods.
- Supports any file type that can be encoded to base64 (e.g., images, music, videos, Git data, etc.).
- Simple setup with Docker for easy deployment.

## Getting Started

### Prerequisites
- Docker
- Docker Compose
- Base64-encoded file you want to inscribe

### 1. Clone the Repository

````bash
git clone https://github.com/metaver5o/apescriptions.git
cd apescriptions
````

### 2. Prepare Your File for Inscription

Before starting, you need to `encode the file you wish to inscribe` on the Apechain network.
- Ensure that the environment variables $PRIVATE_KEY (with enough gas to mint the NFT) and $RECIPIENT_ADDRESS (where the NFT will be minted) are set on `.env`.
- Place your file in the data/ folder.
- Encode it in base64 and save it as base64_image.txt:

````BASH
cp .env.local .env
cat file.ext | base64 > ./data/base64_image.txt
````
### 3. Run the Application

To start the APEscription minting process, simply run:
`docker-compose up` <br>
This will build the Docker container, read your base64-encoded file, and mint it as an Ethscription-like NFT on Apechain.
____

How It Works

	1.	The application reads the base64-encoded file from the data/base64_image.txt file.
	2.	It creates a transaction on the Apechain testnet or mainnet using the provided RPC URL.
	3.	The data is inscribed onto Apechain, and an NFT-like inscription is created.

Environment Variables

Ensure you have the following environment variables set up in your .env file:
````BASH
RPC_URL=https://curtis.rpc.caldera.xyz/http
PRIVATE_KEY=your_private_key
RECIPIENT_ADDRESS=recipient_address
TX_VALUE=0.01  # Adjust based on network requirements
GAS_LIMIT=3000000  # Adjust based on the size of the file
````
Folder Structure
````BASH
.
├── data/                   # Contains your base64-encoded files for inscription
│   └── base64_image.txt    # Example: your base64-encoded file to inscribe
├── docker-compose.yml      # Docker Compose file to orchestrate the application
├── Dockerfile              # Docker setup for running the application
├── mint.js                 # Main application script
└── README.md               # You're reading this file!
````

<br>
<br>

# Example Inscription Data

Here are some example files you can inscribe:
````markdown
Text:
    Convert a simple string to base64 and inscribe it as a note.
    echo "Hello, Apechain!" | base64 > ./data/base64_image.txt
Image:
    Encode a PNG image to base64:
	cat image.png | base64 > ./data/base64_image.txt
Music:
    Encode an MP3 file:
	cat music.mp3 | base64 > ./data/base64_image.txt
````
### Troubleshooting

- **“Intrinsic gas too low” error:** This means the gas limit is too low for the transaction. Increase the `GAS_LIMIT` in your .env file.
- **“Oversized data” error:** The file you’re trying to inscribe is too large for a single transaction. Consider splitting the file or using off-chain storage like IPFS and inscribing only the reference.


License

This project is licensed under the MIT License.

This README provides clear instructions on how to set up and use your application, includes examples, and covers common issues. Let me know if you need any more details!