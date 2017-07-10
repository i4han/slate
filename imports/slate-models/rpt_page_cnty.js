/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rpt_page_cnty', {
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    CNTY: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'rpt_page_cnty'
  });
};
