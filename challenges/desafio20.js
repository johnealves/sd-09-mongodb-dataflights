db.voos.findOne({ rtk: { $exists: true } }, { _id: 0, vooId: 1 });
