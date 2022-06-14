const userRepository = require("../repositories/userRepository");

class userService {
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
        const updatedPost = await userRepository.updateById({
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
                updated_post: updatedPost,
            },
        };
    }
}

module.exports = userService