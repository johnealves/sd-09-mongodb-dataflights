db.voos.find(
  {
    "passageiros.pagos": { $gt: 7000 },
  },
  {
    _id: 0,
    mes: 1,
    ano: 1,
  },
);
