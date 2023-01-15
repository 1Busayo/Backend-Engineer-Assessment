import { createwalletinterface, fundwalletinterface, transferwalletinterface } from "./../interface/wallet.interface"
import { Wallet } from "../models/Wallet";





export default class WalletService {


    async createWallet(input: createwalletinterface) {

        let { user_id } = input;



        await Wallet.query().insert(input);
    }

    async fundWallet(input: fundwalletinterface) {

        let { amount, walletid } = input;

        await Wallet.query().findById(input.walletid).increment('balance', input.amount);


    }

    async transferWallet(input: transferwalletinterface) {

        let { amount, senderwalletid, receiverwalletid } = input;

        if(input.receiverwalletid == input.senderwalletid ) {
            throw Error;
        }

        await Wallet.query().findById(input.senderwalletid).decrement('balance', input.amount);


        await Wallet.query().findById(input.receiverwalletid).increment('balance', input.amount);

        }

        async withdrawfromWallet(input: fundwalletinterface) {

            let { amount, walletid } = input;
    
            await Wallet.query().findById(input.walletid).decrement('balance', input.amount);
    
    
        }
    

    }

