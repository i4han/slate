/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hide', {
    cand_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    }
  }, {
    tableName: 'hide'
  });
};
