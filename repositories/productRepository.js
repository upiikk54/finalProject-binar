const {
    product
} = require("../models");

class productRepository {
    static async create({
        user_id,
        name,
        price,
        category,
        description,
        image,
    }) {
        const createdProduct = product.create({
            user_id,
            name,
            price,
            category,
            description,
            image,
        });

        return createdProduct;
    }
}

module.exports = productRepository;