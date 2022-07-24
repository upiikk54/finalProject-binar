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

    static async getAllUsers() {
        const getUser = await users.findAll();

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
        id,
        isPublish,
        sold
    }) {
        const query = {
            where: {}
        }

        if (id) {
            query.where = { ...query.where, user_id: id }
        }

        if (sold) {
            query.where = { ...query.where, sold }
        }

        if (isPublish) {
            query.where = { ...query.where, isPublish }
        }

        const getProductById = await product.findAll(query);

        return getProductById;
    }
}

module.exports = usersRepository;