/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('filler_text', {
    tf_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    col_num: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tot_lines: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    text1: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    text2: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    text3: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    text4: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    text5: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    text6: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    text7: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    text8: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    text9: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    text10: {
      type: DataTypes.CHAR(64),
      allowNull: true
    }
  }, {
    tableName: 'filler_text'
  });
};
