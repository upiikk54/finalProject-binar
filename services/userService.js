const userRepository = require("../repositories/userRepository");

class userService {
    static async getAllUsers() {
        const getAllUsers = await userRepository.getAllUsers();
        return {
            status: true,
            status_code: 200,
            message: "success get data",
            data: {
                getdata: getAllUsers,
            },
        };
    }

    static async getById({
        id,
    }) {
        const getById = await userRepository.getById({
            id,
        });
        return {
            status: true,
            status_code: 200,
            message: "success get data",
            data: {
                getdata: getById,
            },
        };
    }

    static async updateById({
        id,
        name,
        kota,
        alamat,
        noHp,
        image
    }) {
        const getUsersById = await userRepository.getById({
            id
        })

        if (getUsersById.id == id) {
            const updatedUsers = await userRepository.updateById({
                id,
                name,
                kota,
                alamat,
                noHp,
                image
            });

            return {
                status: true,
                status_code: 200,
                message: "users updated successfully",
                data: {
                    updated_users: updatedUsers,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_users: null,
                },
            };
        }

    }

    static async getProductById({
        id,
        isPublish,
        sold
    }) {
        const getUserProduct = await userRepository.getProductById({
            id,
            isPublish,
            sold
        });

        return {
            status: true,
            status_code: 200,
            message: "Your Product Success to get",
            data: {
                product: getUserProduct,
            },
        };
    }
}

module.exports = userService