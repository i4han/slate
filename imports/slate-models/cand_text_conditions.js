/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cand_text_conditions', {
    version: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    subslateid: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    where_clause: {
      type: DataTypes.CHAR(128),
      allowNull: true
    },
    description: {
      type: DataTypes.CHAR(255),
      allowNull: true
    }
  }, {
    tableName: 'cand_text_conditions'
  });
};
