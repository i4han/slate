/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cand', {
    cand_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    subcode: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    racecode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    seatcode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    numseats: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    match_type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    office: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    office_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    party: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    paid: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: 'A'
    },
    notes: {
      type: DataTypes.CHAR(64),
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    state: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    phone2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    exp_revenue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    consultant: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    consultantphone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    consultantemail: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    in_fill: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: 'N'
    }
  }, {
    tableName: 'cand'
  });
};
