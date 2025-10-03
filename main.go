package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/gagliardetto/solana-go/rpc"
)

func main() {
	rpcURL := os.Getenv("RPC_URL")
	if rpcURL == "" {
		rpcURL = "https://api.mainnet-beta.solana.com"
	}
	client := rpc.New(rpcURL)

	slot, err := client.GetSlot(context.TODO(), rpc.CommitmentConfirmed)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("connected to Solana at slot %d\n", slot)
}
