import WalletService from "./../services/wallet.service"
import { createwalletinterface,fundwalletinterface , transferwalletinterface, withdrawinterface} from "./../interface/wallet.interface";
export default class WalletController {

    async createWallet(input: createwalletinterface) {
        try {
             await new WalletService().createWallet(input) ;
             return {"msg":"Wallet created"};
          } catch (error) {
     
            return {"msg":"Unable to Create wallet"};
          }

    }

    async fundWallet(input: fundwalletinterface) {
        try {
             await new WalletService().fundWallet(input) ;
             return {"msg":"Wallet has been funded with "+input.amount};
          } catch (error) {
     
            return {"msg":"Unable to Fund wallet"};
          }

    }
    async transferWallet(input: transferwalletinterface) {
        try {
             await new WalletService().transferWallet(input) ;
             return {"msg":input.amount+" has been transfered from "+input.senderwalletid+" to "+ input.receiverwalletid};
          } catch (error) {
     
            return {"msg":"Unable to Transfer from wallet to wallet"};
          }

    }
    
    async withdrawfromWallet(input: withdrawinterface) {
        try {
             await new WalletService().withdrawfromWallet(input) ;
             return {"msg":"Wallet has been debited with "+input.amount};
          } catch (error) {
     
            return {"msg":"Unable to Debit wallet"};
          }

    }
}