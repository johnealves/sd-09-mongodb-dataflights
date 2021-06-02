db.voos.countDocuments(
  { "aeroportoDestino.continente": { $not: { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } } },
);