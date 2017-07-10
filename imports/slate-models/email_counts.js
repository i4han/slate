/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_counts', {
    CAND_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    num_emails: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'email_counts'
  });
};
