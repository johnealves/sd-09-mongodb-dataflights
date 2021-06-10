db.voos.find({ aeroportoDestino: { $ne: "ESTADOS UNIDOS" } }).count();
