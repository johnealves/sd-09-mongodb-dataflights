db.voos.find({
  $and: [
    { $or: [{
      "empresa.nome": "DELTA AIRLINES" },
      { "empresa.nome": "AMERICAN AIRLINES" },
      ] }, { $and: [{ "aeroportoOrigem.sigla": "SBGR" }, { "aeroportoDestino.sigla": "JKFK" }] }] },
      { _id: 0, vooId: 1 });
