/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cand_text', {
    text_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cand_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    SubSlateId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    version: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modified: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    in_fill: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'cand_text'
  });
};
