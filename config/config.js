require("dotenv").config();

module.exports = {
  development: {
    username: "vntwfuaqrzvayc",
    password: "df26f9e81e159471c1aba42b82b96e52af11ca8c6e436ea34b57ad9c34e5a8b0",
    database: "dfjdjqad7918m9",
    host: "ec2-52-204-157-26.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: "postgres",
    password: "luthfi54321",
    database: "final-projectBinar",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "vntwfuaqrzvayc",
    password: "df26f9e81e159471c1aba42b82b96e52af11ca8c6e436ea34b57ad9c34e5a8b0",
    database: "dfjdjqad7918m9",
    host: "ec2-52-204-157-26.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
}