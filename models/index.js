const sequelize = require('../config/database');
const Admin = require('./admin.model');
const Product = require('./product.model');
const Chat = require("./chat.model");

module.exports = {
  sequelize,
  Admin,
  Product,
  Chat,
};
