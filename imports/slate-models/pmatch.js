/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmatch', {
    cand_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
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
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'pmatch'
  });
};
