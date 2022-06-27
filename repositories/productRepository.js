const {
    product
} = require("../models");
const { Op } = require("sequelize");

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
        name,
        isPublish,
        sold,
        category
    }) {

        const query = {
            where: {},
            like: {}
        }

        if (name) {
            const searchByName = await product.findAll({
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: '%' + name + '%' } },
                    ]
                },
                limit: 10,
            });

            return searchByName;
        }

        if (sold) {
            query.where = { ...query.where, sold }
        }

        if (category) {
            query.where = { ...query.where, category }
        }

        if (isPublish) {
            query.where = { ...query.where, isPublish }
        }

        const getAllProduct = await product.findAll(query);

        return getAllProduct;
        
        // if (isPublish) {
        //     const filteredCars = await product.findAll({
        //         where: {
        //             isPublish
        //         }
        //     });

        //     return filteredCars;
        // }

        // if (sold) {
        //     const filteredCars = await product.findAll({
        //         where: {
        //             sold
        //         }
        //     });

        //     return filteredCars;
        // }

        // if (category) {
        //     const filteredCars = await product.findAll({
        //         where: {
        //             category
        //         }
        //     });

        //     return filteredCars;
        // }

        // if (isPublish) {
        //     if (sold) {
        //         if (category) {
        //             const filteredCars = await product.findAll({
        //                 where: {
        //                     isPublish,
        //                     sold,
        //                     category
        //                 }
        //             });
        
        //             return filteredCars;
        //         }
        //     }
        // }

        // if (isPublish && sold || category) {
        //     const filteredCars = await product.findAll({
        //         where: {
        //             isPublish,
        //             sold,
        //             category
        //         }
        //     });

        //     return filteredCars;
        // }

        // return product;
    }
}

module.exports = productRepository;