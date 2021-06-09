db.voos.find({}, { _id: 0, vooID: 1 }).skip(9).limit(3);
