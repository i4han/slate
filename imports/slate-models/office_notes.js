/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('office_notes', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    notes: {
      type: DataTypes.STRING(125),
      allowNull: false
    }
  }, {
    tableName: 'office_notes'
  });
};
