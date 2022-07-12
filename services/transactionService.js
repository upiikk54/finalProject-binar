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

        if (!isRejected) {
            return {
                status: false,
                status_code: 400,
                message: "isOpened tidak ada value",
                data: {
                    created_transaksi: null,
                },
            };
        }

        if (!isAccepted) {
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
        const getTransaction = await transactionRepository.getTransactionById({
            id
        });

        if (getTransaction.user_id == user_id) {
            const updateTransaction = await transactionRepository.updateTransaction({
                id,
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
                status_code: 200,
                message: "updated Product successfully",
                data: {
                    update_transaksi: updateTransaction,
                },
            };
        } else {
            return {
                status: true, 
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    update_transaksi: null,
                },
            };
        }
    }

    static async getTransactionByUserId({
        id,
        isAccepted,
        isRejected
    }) {
        const getTransactionByUserId = await transactionRepository.getTransactionByUserId({
            id,
            isAccepted,
            isRejected
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
        isAccepted,
        isRejected
    }) {
        const getTransactionByOwnerId = await transactionRepository.getTransactionByOwnerId({
            id,
            isAccepted,
            isRejected
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