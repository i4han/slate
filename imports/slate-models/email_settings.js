/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_settings', {
    subslateid: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    num: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    min_emails: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'email_settings'
  });
};
