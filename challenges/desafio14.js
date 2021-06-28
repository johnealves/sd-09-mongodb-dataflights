db.voos.find({ "aeroportoOrigem.pais": { $neq: "BRASIL" } }).count();
