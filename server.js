const express = require("express");
const app = express();
const PORT = 8888;
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const upload = require("./utils/fileUpload")

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

// Define Account
app.get("/api/users/:id", userController.getById);
app.put("/api/users/update/:id", middlewares.authenticate, upload.single("image"), userController.updateById);

// Define CRUD Product
app.post("/api/product", middlewares.authenticate, upload.single("image"), productController.create);

app.use("/public/files", express.static(path.join(__dirname, "/storages")));
app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});