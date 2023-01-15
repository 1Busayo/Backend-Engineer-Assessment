export interface createwalletinterface {

    user_id: number;
  }
export interface fundwalletinterface {
    amount: number;
    walletid: number;
  }
  export interface transferwalletinterface {
    amount: number;
    receiverwalletid: number;
    senderwalletid: number;
  }
  export interface withdrawinterface {
    amount: number;
    walletid: number;
  }
  