db.voos.deleteMany({
  "empresa.nome": "GOL",
  "passageiros.pagos": { $exists: true, $lte: 10, $gte: 5 },
});
