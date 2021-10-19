import { Blockchain, Block } from "../lib/bc_transactions.js";

enum Status {
	Initialization = "⏳ Initializing the blockchain, creating the genesis block...",
	AddTransaction = "💸 Add one or more transactions.",
	ReadyToMine = "✅ Ready to mine a new block.",
	MineInProgress = "⏳ Mining a new block...",
}


const amountEl              = document.getElementById('amount') as HTMLInputElement;
const blocksEl              = document.getElementById('blocks') as HTMLDivElement;
const confirmBtn            = document.getElementById('confirm') as HTMLButtonElement;
const pendingTransactionsEl = document.getElementById('pending-transactions') as HTMLPreElement;
const recipientEl           = document.getElementById('recipient') as HTMLInputElement;
const senderEl              = document.getElementById('sender') as HTMLInputElement;
const statusEl              = document.getElementById('status') as HTMLParagraphElement;
const transferBtn           = document.getElementById('transfer') as HTMLButtonElement;


