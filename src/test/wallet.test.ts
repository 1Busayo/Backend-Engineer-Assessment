import supertest from "supertest";
import { app } from '../server'




describe('Wallet service', () => {
  let walletId=1;
  let userId = 1;
   let senderWalletId=5;
  let token="b2b3h2b3k2b";


  test('Create a wallet', async () => {
    const res = await supertest(app)
      .post('/createwallet')
      .set('authkey', token)
      .send({ user_id: userId });
     expect(res.statusCode).toBe(200);
  });
  test('Fund a wallet', async () => {
    const res = await supertest(app)
      .post('/fund')
      .set('authkey', token)
      .send({ walletid: walletId, amount: 100 });
     expect(res.statusCode).toBe(200);
  });

  test('Transfer funds', async () => {
  
    const res = await supertest(app)
      .post('/transfer')
      .set('authkey', token)
      .send({ senderwalletid: senderWalletId, receiverwalletid: walletId, amount: 50 });
    expect(res.statusCode).toBe(200);
  });

  test('Withdraw funds', async () => {
    const res = await supertest(app)
      .post('/withdraw')
      .set('authkey', token)
      .send({ walletid: walletId, amount: 50 });
    expect(res.statusCode).toBe(200);
  });
 });
