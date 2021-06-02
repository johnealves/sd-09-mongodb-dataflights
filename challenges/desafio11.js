db.voos.countDocuments({ "aeroportoDestino.pais": { $not: { $eq: "ESTADOS UNIDOS" } } });
