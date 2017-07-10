/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rpt_overflow_voters', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    tot_pages: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    num_voters: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'rpt_overflow_voters'
  });
};
