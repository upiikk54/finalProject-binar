const transactionService = require("../services/transactionService");

const createTransaction = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        total_harga
    } = req.body;

    const {
        status,
        status_code,
        message,
        data
    } =
    await transactionService.createTransaction({
        id,
        total_harga
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

module.exports = {
    createTransaction
}