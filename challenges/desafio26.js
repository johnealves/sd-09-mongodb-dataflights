db.voos.deleteMany(
  { "empresa.nome": { $eq: "GOL" },
  "passageiros.pagos": { $in: [5, 10] },
  $and: [{ "passageiros.pagos": { $eq: 5 } }, { "passageiros.pagos": { $eq: 10 } }] },
);
