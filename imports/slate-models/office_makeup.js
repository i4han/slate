/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('office_makeup', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    makeup: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    tableName: 'office_makeup'
  });
};
