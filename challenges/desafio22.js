db.voos.find(
  {
    $or: [
      { "empresa.nome": { $eq: "DELTA AIRLINES" } },
      { "empresa.nome": { $eq: "AMERICAN AIRLINES" } }],
    "aeroportoOrigem.sigla": "SBGR",
    "aeroportoDestino.sigla": "KJFK",
  },
  {
    _id: 0,
    vooId: 1,
  },
).limit(1);