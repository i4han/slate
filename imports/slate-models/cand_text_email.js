/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cand_text_email', {
    ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    adddate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    readreceipt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'cand_text_email'
  });
};
