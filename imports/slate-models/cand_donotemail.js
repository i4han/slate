/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cand_donotemail', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cand_donotemail'
  });
};
