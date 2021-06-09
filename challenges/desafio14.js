// db.voos.count({ $not: { "aeroportoDestino.pais": "BRASIL" } });
db.voos.count({ "aeroportoOrigem.pais": { $ne: "BRASIL" } });
