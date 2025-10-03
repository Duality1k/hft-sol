import { Connection, Keypair, VersionedTransaction } from "@solana/web3.js";
import Jupiter from "@jup-ag/api";

const JUP = Jupiter.createJupiterApiClient(undefined);

async function build() {
    const quote = await JUP.quoteGet({
        inputMint: "So11111111111111111111111111111111111111112",
        outputMint: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
        amount: (0.1 * 1e9), // 0.1 SOL
        slippageBps: 50,
    });
    console.log("Best route:", quote.routePlan);
}

build();