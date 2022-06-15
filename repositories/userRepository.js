const {
    users,
    product
} = require("../models");

class usersRepository {

    static async getByEmail({
        email
    }) {
        const getUser = await users.findOne({
            where: {
                email: email
            }
        });

        return getUser;
    }

    static async getById({
        id
    }) {
        const getUser = await users.findOne({
            where: {
                id
            }
        });

        return getUser;
    }

    static async create({
        name,
        email,
        password,
    }) {
        const createdUser = users.create({
            name,
            email,
            password,
        });

        return createdUser;
    }

    static async updateById({
        id,
        name,
        kota,
        alamat,
        noHp,
        image
    }) {
        const updateById = await users.update({
            name,
            kota,
            alamat,
            noHp,
            image
        }, {
            where: {
                id
            }
        });

        return updateById;
    }

    static async getProductById({
        id
    }) {
        const getUserProduct = await product.findAll({
            where: {
                user_id: id
            }
        });

        return getUserProduct;
    }
}

module.exports = usersRepository;