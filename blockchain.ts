import { Block } from "./block";

class Blockchain {
	private readonly chain: Block[] = [];

	private get latestBlock(): Block {
		return this.chain[this.chain.length - 1];
	}

	constructor() {
		this.chain.push(new Block(0, "0", Date.now(), "Genesis Block"));
	}

    addBlock(data: string): void {
        const block = new Block(
            this.latestBlock.index + 1,
            this.latestBlock.hash,
            Date.now(),
            data
        );

        this.chain.push(block);
    }
}

console.log("Creating the blockchain with the genesis block...");
const blockchain = new Blockchain();

console.log("Mining block #1")
blockchain.addBlock("First block");

console.log("Mining block two");
blockchain.addBlock('Second block');

console.log(JSON.stringify(blockchain, null, 2));
