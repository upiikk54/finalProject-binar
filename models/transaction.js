'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transaction.belongsTo(models.product, {
        foreignKey: 'product_id'
      });

      transaction.belongsTo(models.users, {
        foreignKey: 'owner_id'
      });

      transaction.belongsTo(models.users, {
        foreignKey: 'user_id'
      });
    }
  }
  transaction.init({
    owner_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    requestedPrice: DataTypes.INTEGER,
    isAccepted: DataTypes.BOOLEAN,
    isRejected: DataTypes.BOOLEAN,
    isOpened: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};