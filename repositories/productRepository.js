const {
    product,
    users
} = require("../models");
const { Op } = require("sequelize");
const usersRepository = require("./userRepository");

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
        sold,
    }) {
        const updateById = await product.update({
            name,
            price,
            category,
            description,
            image,
            isPublish,
            sold,
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
        const query = {
            where: {},
            include: [{
                model: users,
                attributes: ["id", "name", "kota", "image"]
            }]
        }
        if(id){
            query.where = { ...query.where, id: id}
        }
        
        const getProduct = await product.findOne(query);

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
    }
}

module.exports = productRepository;