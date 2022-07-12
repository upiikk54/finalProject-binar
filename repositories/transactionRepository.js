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

    static async updateTransaction({
        id,
        user_id,
        owner_id,
        product_id,
        requestedPrice,
        isRejected,
        isAccepted,
        isOpened
    }) {
        const updateTransaction = await transaction.update({
            user_id,
            owner_id,
            product_id,
            requestedPrice,
            isRejected,
            isAccepted,
            isOpened
        }, {
            where: {
                id
            }
        });

        return updateTransaction;
    }

    static async getTransactionById({
        id
    }) {
        const getTransaction = await transaction.findOne({
            where: {
                id
            }
        });

        return getTransaction;
    }

    static async getTransactionByUserId({
        id,
        isAccepted,
        isRejected
    }) {
        const query = {
            where: {},
            include: [{
                model: product,
                attributes: ["name", "category", "price", "image"]
            }]
        }

        if (id) {
            query.where = {
                ...query.where,
                user_id: id
            }
        }
        if (isAccepted) {
            query.where = {
                ...query.where,
                isAccepted
            }
        }
        if (isRejected) {
            query.where = {
                ...query.where,
                isRejected
            }
        }

        const getTransactionByUserId = await transaction.findAll(query);

        return getTransactionByUserId;
    }

    static async getTransactionByOwnerId({
        id,
        isAccepted,
        isRejected
    }) {
        const query = {
            where: {},
            include: [{
                model: product,
                attributes: ["name", "category", "price", "image"]
            }]
        }

        if (id) {
            query.where = {
                ...query.where,
                owner_id: id
            }
        }
        if (isAccepted) {
            query.where = {
                ...query.where,
                isAccepted
            }
        }
        if (isRejected) {
            query.where = {
                ...query.where,
                isRejected
            }
        }

        const getTransactionByUserId = await transaction.findAll(query);

        return getTransactionByUserId;
    }
}

module.exports = transactionRepository;