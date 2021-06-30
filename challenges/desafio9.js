db.voos.countDocuments({ ano: { $gte: 2017, $lte: 2018 } });

// db.voos.countDocuments({ ano: { $in: [2017,2018] } });