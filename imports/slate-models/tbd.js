/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbd', {
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
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'tbd'
  });
};
