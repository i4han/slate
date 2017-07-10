/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rpt_cand_voters', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    num_voters: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'rpt_cand_voters'
  });
};
