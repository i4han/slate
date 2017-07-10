/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cand_district', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    district: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    sort: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'cand_district'
  });
};
