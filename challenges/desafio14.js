db.voos.count({ "aeroportoOrigem.pais": { $not: { $in: ["BRASIL"] } } });
