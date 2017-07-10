/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('1ofs_all_combos', {
    precinct: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    combo: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    tableName: '1ofs_all_combos'
  });
};
