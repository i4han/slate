/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rpt_cand_cnty', {
    cand_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    county: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    tableName: 'rpt_cand_cnty'
  });
};
