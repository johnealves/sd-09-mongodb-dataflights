// com 'in' e logo abaixo com 'or' -- (in fica mais 'limpo')
db.voos.findOne(
  {
    "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
    "aeroportoOrigem.sigla": "SBGR",
    "aeroportoDestino.sigla": "KJFK",
  },
  { _id: 0, vooId: 1 },
);

// db.voos.findOne(
//   {
//     $or: [{ "empresa.nome": "DELTA AIRLINES"}, {"empresa.nome": "AMERICAN AIRLINES"}],
//     "aeroportoOrigem.sigla": "SBGR",
//     "aeroportoDestino.sigla": "KJFK"
//   },
//   { _id: 0, vooId: 1 },
// );
