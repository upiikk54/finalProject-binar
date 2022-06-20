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
        isPublish,
        sold
    }) {
        const createdProduct = product.create({
            user_id,
            name,
            price,
            category,
            description,
            image,
            isPublish,
            sold
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
        isPublish,
    }) {
        const updateById = await product.update({
            name,
            price,
            category,
            description,
            image,
            isPublish,
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

    static async getAllProduct({
        isPublish,
        sold,
        category
    }) {
        if (isPublish) {
            const filteredCars = await product.findAll({
                where: {
                    isPublish
                }
            });

            return filteredCars;
        }

        if (sold) {
            const filteredCars = await product.findAll({
                where: {
                    sold
                }
            });

            return filteredCars;
        }

        if (category) {
            const filteredCars = await product.findAll({
                where: {
                    category
                }
            });

            return filteredCars;
        }

        return product;
    }
}

module.exports = productRepository;