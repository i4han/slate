/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cand_info', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    callback: {
      type: DataTypes.DATE,
      allowNull: true
    },
    refused: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    refused_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    phone: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    phone2: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'cand_info'
  });
};
