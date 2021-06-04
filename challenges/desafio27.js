const counter = db.voos.count({ "empresa.nome": "PASSAREDO", natureza: "Doméstica" });
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: counter });
db.resumoVoos.find({}, { _id: 0 });