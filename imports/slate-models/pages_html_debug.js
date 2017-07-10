/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pages_html_debug', {
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
    tableName: 'pages_html_debug'
  });
};
