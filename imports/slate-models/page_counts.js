/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('page_counts', {
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    num_voters: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'page_counts'
  });
};
