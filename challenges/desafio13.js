db.voos.countDocuments({ $and: [{ "aeroportoDestino.continente": { $not: { $eq: "EUROPA" } } },
{ "aeroportoDestino.continente": { $not: { $eq: "ÁSIA" } } },
{ "aeroportoDestino.continente": { $not: { $eq: "OCEANIA" } } },
] });
