/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cand_password', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    tableName: 'cand_password'
  });
};
