db.voos.deleteMany(
{
  "empresa.nome": { $eq: "GOL" },
  "passageiros.pagos": { $lte: 10, $gte: 5 } },
  { _id: 1, "passageiros.pagos": 1 },
);