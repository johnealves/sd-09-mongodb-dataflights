db.voos.deleteMany(
  { $and: [
    { "empresa.nome": "GOL",
    "passageiros.pagos": { $gt: 11, $lt: 4 } },
  ] },
);
// deletedCount: 74;