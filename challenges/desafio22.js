db.voos.findOne({
   "empresa.nome": { $in: ["DELTA ARILINES", "AMERICAN AIRLINES"] },
   "aeroportoOrigem.sigla": "SBGR",
   "aeroportoDestino.sigla": "KJFK",  
  },
  {
    vooId: 1,
    _id: 0,
  });
