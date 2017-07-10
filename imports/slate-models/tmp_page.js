/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_page', {
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
    text_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    paid: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    notes: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    seatcode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    featured_cand: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'tmp_page'
  });
};
