db.voos.find({ "aeroportoDestino.continent": { $not: { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } } })
.count();