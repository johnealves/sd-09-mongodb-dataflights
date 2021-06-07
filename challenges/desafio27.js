db.resumoVoos.insertOne({ empresa: "PASSAREDO",
    totalVoosDomesticos: db.voos.countDocuments({ "empresa.nome": "PASSAREDO",
    natureza: "Doméstica" }) });
db.resumoVoos.findOne({}, { _id: false });
