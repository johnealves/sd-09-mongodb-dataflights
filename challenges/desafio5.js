db.voos.find({ vooId: { $gt: 0 } }, { vooId: 1, _id: 0 }).skip(9).limit(3);
