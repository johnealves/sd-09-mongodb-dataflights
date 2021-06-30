db.voos.deletemMany(
  { "empresa.name": "GOL", "passageiro.pagos": { $gte: 5, $lte: 10 } },
  { deletedCount: 1 },
);