// 20 - Retorne o vooId do primeiro voo em que o campo rtk não exista.
db.voos.findOne({ rtk: { $exists: 0 } }, { _id: 0, vooId: 1 });
