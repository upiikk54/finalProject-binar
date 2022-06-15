const {
    product
} = require("../models");

class productRepository {
    static async create({
        user_id,
        name,
        price,
        category,
        description,
        image,
    }) {
        const createdProduct = product.create({
            user_id,
            name,
            price,
            category,
            description,
            image,
        });

        return createdProduct;
    }

    static async updateById({
        id,
        name,
        price,
        category,
        description,
        image,
    }) {
        const updateById = await product.update({
            name,
            price,
            category,
            description,
            image,
        }, {
            where: {
                id
            }
        });

        return updateById;
    }

    static async deleteById({
        id
    }) {
        const deletedProduct = product.destroy({
            where: {
                id
            }
        });

        return deletedProduct;
    }

    static async getById({
        id
    }) {
        const getProduct = await product.findOne({
            where: {
                id
            }
        });

        return getProduct;
    }

    static async getAll() {
        const getProductAll = await product.findAll();

        return getProductAll;
    }
}

module.exports = productRepository;