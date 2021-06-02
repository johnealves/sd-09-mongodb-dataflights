db.voos.findOne(
  {
    $and: [
      { $or: [{ empresa: "DELTA AIRLINES" }, { empresa: "AMERICAN AIRLINES" }] },
      { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
      { "aeroportoDestino.sigla": { $eq: "KJFK" } }] },
      { _id: 0, vooId: 1 },
);