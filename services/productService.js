const productRepository = require("../repositories/productRepository");

class productService {
    static async create({
        user_id,
        name,
        price,
        category,
        description,
        image,
        isPublish,
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
            isPublish
        });

        return {
            status: true,
            status_code: 201,
            message: "created Product successfully",
            data: {
                created_product: createdProduct,
            },
        };
    }

    static async createFalse({
        user_id,
        name,
        price,
        category,
        description,
        image,
        isPublish,
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

        const createdProduct = await productRepository.createFalse({
            user_id,
            name,
            price,
            category,
            description,
            image,
            isPublish
        });

        return {
            status: true,
            status_code: 201,
            message: "created Product successfully",
            data: {
                created_product: createdProduct,
            },
        };
    }

    static async updateById({
        id,
        user_id,
        name,
        price,
        category,
        description,
        image,
    }) {
        const getProduct = await productRepository.getById({
            id
        });

        if (getProduct.user_id == user_id) {
            const updatedProduct = await productRepository.updateById({
                id,
                name,
                price,
                category,
                description,
                image,
            });

            return {
                status: true,
                status_code: 200,
                message: "Product updated successfully",
                data: {
                    updated_product: updatedProduct,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_product: null,
                },
            };
        }
    }

    static async deleteById({
        user_id,
        id,
    }) {
        const getProduct = await productRepository.getById({
            id
        });

        if (getProduct.user_id == user_id) {
            const deletedProduct = await productRepository.deleteById({
                id,
            });

            return {
                status: true,
                status_code: 200,
                message: "Product deleted successfully",
                data: {
                    deleted_product: deletedProduct,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_post: null,
                },
            };
        }
    }

    static async getAll() {
        const getProductAll = await productRepository.getAll();

        return {
            status: true,
            status_code: 200,
            message: "Product successfully loaded",
            data: {
                getProductAll: getProductAll,
            },
        };
    }

    static async getById({
        id,
    }) {
        const getProductById = await productRepository.getById({
            id,
        });
        return {
            status: true,
            status_code: 200,
            message: "success get data",
            data: {
                getProductById: getProductById,
            },
        };
    }
}

module.exports = productService;