/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmatch_dw', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    county: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    precinct: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    match_type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'pmatch_dw'
  });
};
