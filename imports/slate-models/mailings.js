/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mailings', {
    MailingID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SubSlateID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    Category: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    NumMailings: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    MailDates: {
      type: DataTypes.STRING(400),
      allowNull: false
    }
  }, {
    tableName: 'mailings'
  });
};
