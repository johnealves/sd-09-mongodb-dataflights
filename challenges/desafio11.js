db.voos.countDocuments({ $nor: [{ "aeroportoDestino.pais": "ESTADOS UNIDOS" }] });
