const productService = require("../services/productService");

const create = async (req, res) => {
    const {
        name,
        price,
        category,
        description,
        isPublish,
        sold
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
        image: req.files,
        isPublish,
        sold
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
        isPublish,
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
        isPublish,
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

const filtered = async (req, res) => {
    const { name, isPublish, sold, category } = req.query;

    const {
        status,
        code_status,
        message,
        data
    } = await productService.filtered({name, isPublish, sold, category });

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
}

module.exports = {
    create,
    updateById,
    deleteById,
    getAll,
    getById,
    filtered
}