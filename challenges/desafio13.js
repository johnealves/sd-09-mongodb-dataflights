db.voos.find({ "aeroportoDestino.continente": { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();
