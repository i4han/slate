/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pages', {
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    version_id: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    combo: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    party: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    suppress: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'pages'
  });
};
