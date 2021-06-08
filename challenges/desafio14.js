db.voos.find(
  { aeroportoOrigem: { $ne: "BRASIL" } },
  {},
).count();
