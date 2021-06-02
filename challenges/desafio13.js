db.voos.countDocuments({ "aeroportoDestino.continente": { $nin: ["EUROPA", "ASIA", "OCEANIA"] } });
