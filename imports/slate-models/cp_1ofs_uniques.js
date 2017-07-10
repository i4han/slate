/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cp_1ofs_uniques', {
    combo: {
      type: DataTypes.CHAR(255),
      allowNull: true
    }
  }, {
    tableName: 'cp_1ofs_uniques'
  });
};
