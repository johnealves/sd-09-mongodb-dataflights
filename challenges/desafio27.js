const a = db.voos.countDocuments({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: a });
db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
