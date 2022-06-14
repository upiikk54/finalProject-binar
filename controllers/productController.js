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
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

module.exports = {
    create
}