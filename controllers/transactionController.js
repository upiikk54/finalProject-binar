const transactionService = require("../services/transactionService");

const createTransaction = async (req, res) => {
    const {
        owner_id,
        product_id,
        requestedPrice,
        isRejected,
        isAccepted,
        isOpened
    } = req.body;
    console.log(req.body);

    const user_id = req.user.id;

    const {
        status,
        status_code,
        message,
        data
    } =
    await transactionService.createTransaction({
        user_id,
        owner_id,
        product_id,
        requestedPrice,
        isRejected,
        isAccepted,
        isOpened
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

const updateTransaction = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        owner_id,
        product_id,
        requestedPrice,
        isRejected,
        isAccepted,
        isOpened
    } = req.body;

    const user_id = req.user.id;

    const {
        status,
        status_code,
        message,
        data
    } =
    await transactionService.updateTransaction({
        id,
        user_id,
        owner_id,
        product_id,
        requestedPrice,
        isRejected,
        isAccepted,
        isOpened
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

const getTransactionByUserId = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        isAccepted,
        isRejected
    } = req.query;

    const {
        status,
        status_code,
        message,
        data
    } = await transactionService.getTransactionByUserId({
        id,
        isAccepted,
        isRejected
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const getTransactionByOwnerId = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        isAccepted,
        isRejected
    } = req.query;

    const {
        status,
        status_code,
        message,
        data
    } = await transactionService.getTransactionByOwnerId({
        id,
        isAccepted,
        isRejected
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const getAllTransaction = async (req, res) => {
    const {
        status,
        status_code,
        message,
        data
    } = await transactionService.getAllTransaction();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

module.exports = {
    getAllTransaction,
    createTransaction,
    updateTransaction,
    getTransactionByUserId,
    getTransactionByOwnerId
}