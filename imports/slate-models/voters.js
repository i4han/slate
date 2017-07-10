/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('voters', {
    MAILSEQN: {
      type: DataTypes.CHAR(9),
      allowNull: true,
      defaultValue: ''
    },
    CNTY: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    FULLPR: {
      type: DataTypes.CHAR(11),
      allowNull: true,
      defaultValue: ''
    },
    CONSPR: {
      type: DataTypes.CHAR(11),
      allowNull: true,
      defaultValue: ''
    },
    FPREC: {
      type: DataTypes.CHAR(9),
      allowNull: true,
      defaultValue: ''
    },
    LNAME: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    FNAME: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    MNAME: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    ADDRESS: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    MEXTRA: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    MCSZ: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    CITY: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    STATE: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    ZIP: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: ''
    },
    ZIP4: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      defaultValue: ''
    },
    RZIP: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: ''
    },
    PRIM_ID: {
      type: DataTypes.CHAR(12),
      allowNull: true,
      defaultValue: ''
    },
    PARTY: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    SEX: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    AGE: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    ETHNIC: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    AFAM: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    LGBTDOMPARTNER: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    HPT_NT: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    PERMAV: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    PDINEIGHBORHOOD: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    CD: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    SD: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    AD: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    NCITY: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ''
    },
    SUP: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ''
    },
    USD: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ''
    },
    LATINO: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    DRLINE: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    HNAME1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    VOTER_ID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PAGE_ID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    SUPPRESS: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    AVHOUSE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    CVG: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    BWD: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    LEVINE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    SENIOR: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    MSS_ENDOR: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: ''
    },
    MSS_SEQ: {
      type: DataTypes.CHAR(8),
      allowNull: true,
      defaultValue: ''
    },
    ZIP10: {
      type: DataTypes.CHAR(12),
      allowNull: true,
      defaultValue: ''
    },
    FORMCODE: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: ''
    },
    FILE_TYPE: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: ''
    },
    DP: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    CHKDGT: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    CART: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      defaultValue: ''
    },
    ELOT: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: ''
    },
    WS: {
      type: DataTypes.CHAR(7),
      allowNull: true,
      defaultValue: ''
    },
    BRF: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: ''
    },
    RC: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      defaultValue: ''
    },
    TWMAIL_ORD: {
      type: DataTypes.CHAR(8),
      allowNull: true,
      defaultValue: ''
    },
    PRC_CAT: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: ''
    },
    POSTAGE: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: ''
    },
    IMB_ADR: {
      type: DataTypes.CHAR(31),
      allowNull: true,
      defaultValue: ''
    },
    OPTENDRS: {
      type: DataTypes.CHAR(40),
      allowNull: true,
      defaultValue: ''
    },
    PLLTNMBR: {
      type: DataTypes.CHAR(6),
      allowNull: true,
      defaultValue: ''
    },
    SORTINFO: {
      type: DataTypes.CHAR(11),
      allowNull: true,
      defaultValue: ''
    },
    SORTMARK: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: ''
    },
    ENTRY_POINT: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      defaultValue: ''
    },
    ENT_PT_NAM: {
      type: DataTypes.CHAR(35),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'voters'
  });
};
