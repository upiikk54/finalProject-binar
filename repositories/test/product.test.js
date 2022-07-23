const request = require("supertest");
const productRepository = require("../productRepository");
const userRepository = require("../userRepository")


// test untuk register
describe("auth", () => {
    it("registerAccount", async () => {
        const payloadRegister = {
            name: "Rafi",
            email: "rafialbaihaqibc@gmail.com",
            password: "0101garuda",
        };

        const registerAccount = await userRepository.create(payloadRegister);
        // Assertion
        expect(registerAccount.name).toEqual(payloadRegister.name);
        expect(registerAccount.email).toEqual(payloadRegister.email);
        expect(registerAccount.password).toEqual(payloadRegister.password);
    });
});

// test untuk login
describe("authLogin", () => {
    it("loginAccount", async () => {
        const payloadLogin = {
            email: "rafialbaihaqibc@gmail.com",
            password: "0101garuda",
        };

        const loginAccount = await userRepository.create(payloadLogin);
        // Assertion
        expect(loginAccount.email).toEqual(payloadLogin.email);
        expect(loginAccount.password).toEqual(payloadLogin.password);
    });
});

// test untuk create product
describe("product", () => {
    it("createProduct", async () => {
        const payloadCreateProduct = {
            user_id: 1,
            name: "gelang",
            price: 20000,
            category: "hobby",
            description: "gelang karet",
            isPublish: true,
            sold: true,
        };

        const createProduct = await productRepository.create(payloadCreateProduct);
        // Assertion
        expect(createProduct.user_id).toEqual(payloadCreateProduct.user_id);
        expect(createProduct.name).toEqual(payloadCreateProduct.name);
        expect(createProduct.price).toEqual(payloadCreateProduct.price);
        expect(createProduct.category).toEqual(payloadCreateProduct.category);
        expect(createProduct.description).toEqual(payloadCreateProduct.description);
        expect(createProduct.isPublish).toEqual(payloadCreateProduct.isPublish);
        expect(createProduct.sold).toEqual(payloadCreateProduct.sold);
    });
});

// get product by id
describe("get product by id", () => {
    it("should create product to db", async () => {
        // Create Data
        const productToCreate = {
            user_id: 1,
            name: "gelang",
            price: 20000,
            category: "hobby",
            description: "gelang karet",
            isPublish: true,
            sold: true,
        };

        const createdProduct = await productRepository.create(productToCreate);

        const createProduct = await productRepository.getById({
            id: createdProduct.id
        });
        // Assertion
        expect(createProduct.user_id).toEqual(createdProduct.user_id);
        expect(createProduct.name).toEqual(createdProduct.name);
        expect(createProduct.price).toEqual(createdProduct.price);
        expect(createProduct.category).toEqual(createdProduct.category);
        expect(createProduct.description).toEqual(createdProduct.description);
        expect(createProduct.isPublish).toEqual(createdProduct.isPublish);
        expect(createProduct.sold).toEqual(createdProduct.sold);
    });
});