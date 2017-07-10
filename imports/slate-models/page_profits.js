/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('page_profits', {
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    profit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'page_profits'
  });
};
