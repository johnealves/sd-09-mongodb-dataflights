db.voos.count({ $and: [{ ano: { $eq: 2016 } }, { ano: { $lte: 2017 } }] });
