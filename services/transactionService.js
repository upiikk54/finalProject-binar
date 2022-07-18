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
            message: "created transaction successfully",
            data: {
                created_transaksi: createTransaction,
            },
        };
    }

    static async updateTransaction({
        id,
        user_id,
        product_id,
        requestedPrice,
        isRejected,
        isAccepted,
        isOpened
    }) {
        const getTransaction = await transactionRepository.getTransactionById({
            id
        });

        if (getTransaction.owner_id == user_id) {
            const updateTransaction = await transactionRepository.updateTransaction({
                id,
                user_id,
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

    static async getTransactionNotif({
        id,
        isAccepted,
        isRejected
    }) {
        const getTransactionNotif = await transactionRepository.getTransactionNotif({
            id,
            isAccepted,
            isRejected
        });
        return {
            status: true,
            status_code: 200,
            message: "success get data",
            data: {
                getTransactionNotif: getTransactionNotif,
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

    static async getAllTransaction() {
        try {
            const getAllTransaction = await transactionRepository.getAllTransaction();

            return {
                status: true,
                status_code: 200,
                message: "Product successfully loaded",
                data: {
                    getAllTransaction: getAllTransaction,
                },
            };
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    getAllTransaction: null,
                },
            };
        }
    }

    static async getTransactionById({
        isAccepted,
        isRejected,
        id,
    }) {
        const getTransactionById = await transactionRepository.getTransactionById({
            isAccepted,
            isRejected,
            id,
        });
        return {
            status: true,
            status_code: 200,
            message: "success get data",
            data: {
                getTransactionById: getTransactionById,
            },
        };
    }
}

module.exports = transactionService;