db.voos.count({ $nor: [{ "aeroportoOrige.pais": "BRASIL" }] });
