/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('office', {
    office_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    county: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    office: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    office2: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    cnty: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ix: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    dist: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    sub: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    race: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    seat: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    porder: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    break: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'Y'
    }
  }, {
    tableName: 'office'
  });
};
