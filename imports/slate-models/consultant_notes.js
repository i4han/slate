/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consultant_notes', {
    consultant_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'consultant_notes'
  });
};
