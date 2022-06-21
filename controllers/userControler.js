const userService = require("../services/userService");

const getById = async (req, res) => {
    const {
        id
    } = req.params;

    const {
        status,
        status_code,
        message,
        data
    } = await userService.getById({
        id
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const updateById = async (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        name,
        kota,
        alamat,
        noHp,
    } = req.body;

    const {
        status,
        status_code,
        message,
        data
    } = await userService.updateById({
        id,
        name,
        kota,
        alamat,
        noHp,
        image: req.uploaded_image,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const getProductById = async (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        isPublish,
        sold
    } = req.query;

    const {
        status,
        status_code,
        message,
        data
    } =
    await userService.getProductById({
        id,
        isPublish,
        sold
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

module.exports = {
    getById,
    updateById,
    getProductById
}