const express = require("express");
const app = express();
const PORT = 8888;
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const upload = require("./utils/fileUpload");
const uploadSingle = require("./utils/fileUploadSingle");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// import Controller
const authController = require("./controllers/authController");
const userController = require("./controllers/userControler");
const productController = require("./controllers/productController");

// import Authenticate
const middlewares = require("./middlewares/auth")

// Define Routes Auth
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);
app.get("/auth/me", middlewares.authenticate, authController.currentUser);

// Define Account
app.get("/api/users", userController.getAllUsers);
app.get("/api/users/:id", middlewares.authenticate, userController.getById);
app.put("/api/users/:id", middlewares.authenticate, uploadSingle.single("image"), userController.updateById);

// Define CRUD Product
app.post("/api/product", middlewares.authenticate, upload.fields([{name: "image"}]), productController.create);
app.put("/api/product/:id", middlewares.authenticate, upload.fields([{name: "image"}]), productController.updateById);
app.delete("/api/product/:id", middlewares.authenticate, productController.deleteById);

// Get Product
app.get("/api/product", productController.getAll);
app.get('/api/product/:id',middlewares.authenticate, productController.getById);
app.get("/users/:id/product", middlewares.authenticate, userController.getProductById);
app.get("/api/filter?", productController.filtered);


app.use("/public/files", express.static(path.join(__dirname, "/storages")));

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});