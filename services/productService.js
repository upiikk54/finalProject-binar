const productRepository = require("../repositories/productRepository");

class productService {
    static async create({
        user_id,
        name,
        price,
        category,
        description,
        image,
        sold,
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

        if (sold === null) {
            return {
                status: false,
                code_status: 400,
                message: "driver wajib diisi",
                data: {
                    created_Cars: null,
                }
            }
        };

        if (isPublish === null) {
            return {
                status: false,
                code_status: 400,
                message: "driver wajib diisi",
                data: {
                    created_Cars: null,
                }
            }
        };

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

        if (!image.length) {
            return {
                status: false,
                status_code: 400,
                message: "image wajib diisi",
                data: {
                    created_product: null,
                },
            };
        } else if (image.length >= 5) {
            return {
                status: false,
                status_code: 400,
                message: "image maksimal 4",
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
            isPublish,
            sold
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

        if (!image.length) {
            return {
                status: false,
                status_code: 400,
                message: "image maksimal 4",
                data: {
                    created_product: null,
                },
            };
        } else if (image.length >= 4) {
            return {
                status: false,
                status_code: 400,
                message: "image maksimal 4",
                data: {
                    created_product: null,
                },
            };
        }

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
                isPublish,
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
        try {
            const getProductAll = await productRepository.getAll();

            return {
                status: true,
                status_code: 200,
                message: "Product successfully loaded",
                data: {
                    getProductAll: getProductAll,
                },
            };
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    getProductAll: null,
                },
            };
        }
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

    static async filtered({
        isPublish,
        sold,
        category
    }) {
        try {
            const getAllProduct = await productRepository.getAllProduct({
                isPublish,
                sold,
                category
            });

            return {
                status: true,
                code_status: 200,
                message: "data product berhasil ditampilkan",
                data: {
                    filteredProduct: getAllProduct,
                },
            };
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    filtered_product: null,
                },
            };
        }
    }
}

module.exports = productService;