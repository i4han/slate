/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cand_salesperson', {
    salesperson_id: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'cand_salesperson'
  });
};
