db.voos.find({ "passageiros.pagos": { $gte: 700 } }, { vooId: 1, mes: 1, ano: 1, _id: 0 }).limit(1);
