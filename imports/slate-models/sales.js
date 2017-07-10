/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CAND_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    SubSlateID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    AMOUNT: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    EMAILAMOUNT: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    VOTERS: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    TXNID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    paid: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    paid_mark: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'Y'
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    adddate: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'sales'
  });
};
