db.voos.findOne({
  "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
  "aeroportoOrigem.sigla": "SBGR",
  "aeroportoDestino.sigla": "KJFK",
}, { _id: 0, vooId: 1 });

/* db.voos.findOne({
  "empresa.nome": { $or: [{
      "empresa.nome": "DELTA AIRLINES",
      "aeroportoOrigem.sigla": "SBGR",
      "aeroportoDestino.sigla": "KJFK",
    },
    {
      "empresa.nome": "AMERICAN AIRLINES",
      "aeroportoOrigem.sigla": "SBGR",
      "aeroportoDestino.sigla": "KJFK",
    }] },
}, { _id: 0, vooId: 1 }); */