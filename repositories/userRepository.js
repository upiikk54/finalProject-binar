const {
    users
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
}

module.exports = usersRepository;