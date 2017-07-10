/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rpt_overflow', {
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    version_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    cand_id: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    tableName: 'rpt_overflow'
  });
};
