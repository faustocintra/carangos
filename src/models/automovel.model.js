// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const automovel = sequelizeClient.define('automovel', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ano_fabricacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    importado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    preco: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  automovel.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return automovel;
};
