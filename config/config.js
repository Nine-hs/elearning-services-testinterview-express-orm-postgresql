require("dotenv").config()

module.exports = {
  "development": {
    "username": process.env.D_USERNAME,
    "password": process.env.D_PASSWORD,
    "database": process.env.D_NAME,
    "host": process.env.D_HOST,
    "dialect": process.env.D_DRIVER
  },
  "test": {
    "username": process.env.T_USERNAME,
    "password": process.env.T_PASSWORD,
    "database": process.env.T_NAME,
    "host": process.env.T_HOST,
    "dialect": process.env.T_DRIVER
  },
  "production": {
    "username": process.env.P_USERNAME,
    "password": process.env.P_PASSWORD,
    "database": process.env.P_NAME,
    "host": process.env.P_HOST,
    "dialect": process.env.P_DRIVER
  }
};
