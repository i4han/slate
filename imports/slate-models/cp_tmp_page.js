/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cp_tmp_page', {
    page_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    version_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    cand_id: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    first_name: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    last_name: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    occupation: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    office_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    office: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    break: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    porder: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    rank: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    county: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ixcode: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    distcode: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    paid: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    tableName: 'cp_tmp_page'
  });
};
