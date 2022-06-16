const productService = require("../services/productService");

const create = async (req, res) => {
    const {
        name,
        price,
        category,
        description,
    } = req.body;

    const user_id = req.user.id;

    const {
        status,
        status_code,
        message,
        data
    } = await productService.create({
        user_id,
        name,
        price,
        category,
        description,
        image: req.uploaded_image,
        isPublish: "true",
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const createFalse = async (req, res) => {
    const {
        name,
        price,
        category,
        description,
    } = req.body;

    const user_id = req.user.id;

    const {
        status,
        status_code,
        message,
        data
    } = await productService.createFalse({
        user_id,
        name,
        price,
        category,
        description,
        image: req.uploaded_image,
        isPublish: "false",
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const updateById = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        name,
        price,
        category,
        description,
    } = req.body;

    const user_id = req.user.id;

    const {
        status,
        status_code,
        message,
        data
    } = await productService.updateById({
        id,
        user_id,
        name,
        price,
        category,
        description,
        image: req.uploaded_image,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const deleteById = async (req, res) => {
    const {
        id
    } = req.params;

    const user_id = req.user.id;

    const {
        status,
        status_code,
        message,
        data
    } = await productService.deleteById({
        id,
        user_id,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const getAll = async (req, res) => {
    const {
        status,
        status_code,
        message,
        data
    } = await productService.getAll();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

const getById = async (req, res) => {
    const {
        id
    } = req.params;

    const {
        status,
        status_code,
        message,
        data
    } = await productService.getById({
        id
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

module.exports = {
    create,
    createFalse,
    updateById,
    deleteById,
    getAll,
    getById,
}