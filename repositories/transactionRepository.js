const {
    product,
    users,
    transaction
} = require("../models");
const { Op } = require("sequelize");


class transactionRepository {
    static async getAllTransaction() {
        const getAllTransaction = await transaction.findAll();

        return getAllTransaction;
    }

    static async getTransactionById({
        id,
        isAccepted,
        isRejected
    }) {
        const query = {
            where: {},
            include: [{
                model: product,
                attributes: ["name", "category", "price", "image"]
            },
            {
                model: users,
                attributes: ["name", "email", "kota", "alamat", "noHp", "image"]
            }]
        }

        if (id) {
            query.where = {
                ...query.where,
                id: id
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

        const getTransactionByUserId = await transaction.findOne(query);

        return getTransactionByUserId;
    }

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
        isRejected,
        isAccepted,
        isOpened
    }) {
        const updateTransaction = await transaction.update({
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
            },
            {
                model: users,
                attributes: ["name", "email", "kota", "alamat", "noHp", "image"]
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
        console.log(query);
        console.log(typeof isRejected);
        return getTransactionByUserId;
    }

    static async getTransactionNotif({
        id,
        isAccepted,
        isRejected
    }) {
        const query = {
            where: {},
            include: [{
                model: product,
                attributes: ["name", "category", "price", "image"]
            },
            {
                model: users,
                attributes: ["name", "email", "kota", "alamat", "noHp", "image"]
            }]
        }

        if (id) {
            query.where = {
                ...query.where,
                [Op.or]: [ {owner_id: {[Op.eq]: id}}, {user_id: {[Op.eq]: id}} ]
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