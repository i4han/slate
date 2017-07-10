/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rpt_cand_first_appearance', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'rpt_cand_first_appearance'
  });
};
