db.voos.find(
  {
    "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
    "aeroportoOrigem.sigla": "SBGR",
    "aeroportoDestino.sigla": "KFJK",
  },
  {
    _id: false,
    vooId: true,
  },
).limit(1);
