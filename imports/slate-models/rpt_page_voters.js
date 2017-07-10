/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rpt_page_voters', {
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    num_voters: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'rpt_page_voters'
  });
};
