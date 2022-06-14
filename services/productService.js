const productRepository = require("../repositories/productRepository");

class productService {
    static async create({
        user_id,
        name,
        price,
        category,
        description,
        image,
    }) {
        if (!name) {
            return {
                status: false,
                status_code: 400,
                message: "name wajib diisi",
                data: {
                    created_product: null,
                },
            };
        }

        if (!price) {
            return {
                status: false,
                status_code: 400,
                message: "price wajib diisi",
                data: {
                    created_product: null,
                },
            };
        }

        if (!category) {
            return {
                status: false,
                status_code: 400,
                message: "category wajib diisi",
                data: {
                    created_product: null,
                },
            };
        }

        if (!description) {
            return {
                status: false,
                status_code: 400,
                message: "description wajib diisi",
                data: {
                    created_product: null,
                },
            };
        }

        if (!image) {
            return {
                status: false,
                status_code: 400,
                message: "image wajib diisi",
                data: {
                    created_product: null,
                },
            };
        }
        const createdProduct = await productRepository.create({
            user_id,
            name,
            price,
            category,
            description,
            image,
        });

        return {
            status: true,
            status_code: 201,
            message: "created posts successfully",
            data: {
                created_product: createdProduct,
            },
        };
    }
}

module.exports = productService;