/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cp_pages_html', {
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'cp_pages_html'
  });
};
