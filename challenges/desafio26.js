db.voos.deleteMany(
  { "empresa.nome": "GOL", "passageiros.pagos": { $gt: 5, $lt: 10 } },
); // deletedCount: 43;
