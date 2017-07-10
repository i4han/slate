/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('page_cands', {
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'page_cands'
  });
};
