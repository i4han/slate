/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('current_mailing', {
    mailing: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    tableName: 'current_mailing'
  });
};
