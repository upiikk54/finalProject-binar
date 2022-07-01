const {
    product,
    transaction
} = require("../models");

class transactionRepository {
    static async createTransaction({
        user_id,
        owner_id,
        product_id,
        requestedPrice,
        isRejected,
        isAccepted,
        isOpened
    }) {
        const createdProduct = transaction.create({
            user_id,
            owner_id,
            product_id,
            requestedPrice,
            isRejected,
            isAccepted,
            isOpened
        });

        return createdProduct;
    }

    static async getTransactionByUserId({
        id
    }) {
        const query = {
            where: {},
            include: [{
                model: product,
                attributes: ["name", "category", "price", "image"]
            }]
        }

        if (id) {
            query.where = { ...query.where, user_id: id }
        }

        const getTransactionByUserId = await transaction.findAll(query);

        return getTransactionByUserId;
    }

    static async getTransactionByOwnerId({
        id
    }) {
        const query = {
            where: {},
            include: [{
                model: product,
                attributes: ["name", "category", "price", "image"]
            }]
        }

        if (id) {
            query.where = { ...query.where, owner_id: id }
        }

        const getTransactionByUserId = await transaction.findAll(query);

        return getTransactionByUserId;
    }
}

module.exports = transactionRepository;