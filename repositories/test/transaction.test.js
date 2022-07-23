const request = require("supertest");
const transactionRepository = require("../transactionRepository");

//create transaction
describe("transaction", () => {
    it("createTransaction", async () => {
        const payloadCreateTransaction = {
            user_id: 1,
            owner_id: 1,
            product_id: 1,
            requestedPrice: 190000,
            isRejected: true,
            isAccepted: true,
            isOpened: true,
        };
        
        const createTransaction = await transactionRepository.createTransaction(payloadCreateTransaction);
        // Assertion
        expect(createTransaction.user_id).toEqual(payloadCreateTransaction.user_id);
        expect(createTransaction.owner_id).toEqual(payloadCreateTransaction.owner_id);
        expect(createTransaction.product_id).toEqual(payloadCreateTransaction.product_id);
        expect(createTransaction.requestedPrice).toEqual(payloadCreateTransaction.requestedPrice);
        expect(createTransaction.isRejected).toEqual(payloadCreateTransaction.isRejected);
        expect(createTransaction.isAccepted).toEqual(payloadCreateTransaction.isAccepted); 
        expect(createTransaction.isOpened).toEqual(payloadCreateTransaction.isOpened);    
    });
});

//getTransactionById
describe("transaction", () => {
    it("createTransaction", async () => {
        const transactionToCreate = {
            user_id: 1,
            owner_id: 1,
            product_id: 1,
            requestedPrice: 190000,
            isRejected: true,
            isAccepted: true,
            isOpened: true,
        };
        
        const createdTransaction = await transactionRepository.createTransaction(transactionToCreate);
        const createTransaction = await transactionRepository.getTransactionById({ id: createdTransaction.id });
        // Assertion
        expect(createTransaction.user_id).toEqual(createdTransaction.user_id);
        expect(createTransaction.owner_id).toEqual(createdTransaction.owner_id);
        expect(createTransaction.product_id).toEqual(createdTransaction.product_id);
        expect(createTransaction.requestedPrice).toEqual(createdTransaction.requestedPrice);
        expect(createTransaction.isRejected).toEqual(createdTransaction.isRejected);
        expect(createTransaction.isAccepted).toEqual(createdTransaction.isAccepted); 
        expect(createTransaction.isOpened).toEqual(createdTransaction.isOpened);    
    });
});



