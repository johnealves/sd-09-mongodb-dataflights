db.voos.find(
  { "aeroportoOrigem.nome": { $ne: "BRASIL" } },
  {},
).count();
