const express = require("express");
const app = express();
const PORT = 8888;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// import Controller
const authController = require("./controllers/authController");

// Define Routes Auth
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);


app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});