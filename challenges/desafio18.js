db.voos.findOne({ "passageiros.pagos": { $gt: 7000 } },
{
  _id: 0,
  vooId: true,
  mes: true,
  ano: true,
});
