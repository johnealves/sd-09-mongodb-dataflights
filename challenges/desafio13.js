db.voos.count(
  { "aeroportoDestino.continente": { $not: { $in: ["EUROPA", "ÁSIA", "EUROPA"] } } },
);
