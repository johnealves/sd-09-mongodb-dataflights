db.voos.findOne(
  { "passageiros.pagos": { $gte: 7000 } },
  { vooId: 1, _id: 0, ano: 1, mes: 1 },
);
