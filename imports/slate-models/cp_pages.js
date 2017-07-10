/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cp_pages', {
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    version_id: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    combo: {
      type: DataTypes.CHAR(255),
      allowNull: true
    }
  }, {
    tableName: 'cp_pages'
  });
};
