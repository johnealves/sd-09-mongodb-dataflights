db.voos.find(
  {
    "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
    "aeroportoOrigem.sigla": "SBGR",
    "aeroportoOrigem.sigla": "KJFK",
  },
  {
    vooId: 1,
    _id: 0,
  },
).limit(1);
