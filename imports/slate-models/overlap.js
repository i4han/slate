/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('overlap', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    subslateid: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'overlap'
  });
};
