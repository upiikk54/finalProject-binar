const transactionRepository = require("../repositories/transactionRepository");

class transactionService {
    static async createTransaction({
        user_id,
        owner_id,
        product_id,
        requestedPrice,
        isRejected,
        isAccepted,
        isOpened
    }) {
        if (!requestedPrice) {
            return {
                status: false,
                status_code: 400,
                message: "harga wajib diisi",
                data: {
                    created_transaksi: null,
                },
            };
        }

        if (!product_id) {
            return {
                status: false,
                status_code: 400,
                message: "product id tidak ditemukan",
                data: {
                    created_transaksi: null,
                },
            };
        }

        if (!owner_id) {
            return {
                status: false,
                status_code: 400,
                message: "owner id tidak ditemukan",
                data: {
                    created_transaksi: null,
                },
            };
        }

        if (!isOpened) {
            return {
                status: false,
                status_code: 400,
                message: "isOpened tidak ada value",
                data: {
                    created_transaksi: null,
                },
            };
        }

        const createTransaction = await transactionRepository.createTransaction({
            user_id,
            owner_id,
            product_id,
            requestedPrice,
            isRejected,
            isAccepted,
            isOpened
        });

        return {
            status: true,
            status_code: 201,
            message: "created Product successfully",
            data: {
                created_transaksi: createTransaction,
            },
        };
    }

    static async getTransactionByUserId({
        id,
    }) {
        const getTransactionByUserId = await transactionRepository.getTransactionByUserId({
            id,
        });
        return {
            status: true,
            status_code: 200,
            message: "success get data",
            data: {
                getTransactionByUserId: getTransactionByUserId,
            },
        };
    }

    static async getTransactionByOwnerId({
        id,
    }) {
        const getTransactionByOwnerId = await transactionRepository.getTransactionByOwnerId({
            id,
        });
        return {
            status: true,
            status_code: 200,
            message: "success get data",
            data: {
                getTransactionByOwnerId: getTransactionByOwnerId,
            },
        };
    }
}

module.exports = transactionService;