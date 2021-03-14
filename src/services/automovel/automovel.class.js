const { Service } = require('feathers-sequelize');

exports.Automovel = class Automovel extends Service {
  async find(params) {
    const { data } = await super.find({query: {$sort: { marca: 1, modelo: 1 }}})
    return data
  }

  async get(id, params) {
    return super.get(id, params)
  }

  async create(data, params) {
    const validData = {
      marca: data.marca,
      modelo: data.modelo,
      cor: data.cor,
      ano_fabricacao: data.ano_fabricacao,
      importado: data.importado,
      placa: data.placa,
      preco: data.preco
    }
    return super.create(validData, params)
  }

  async update(id, data, params) {
    return super.update(id, data, params)
  }

  async patch(id, data, params) {
    return super.patch(id, data, params)
  }

  async remove(id, params) {
    return super.remove(id, params)
  }
};
