const passaredoTotalDomesticFlys = db.voos.find(
  { "empresa.nome": "PASSAREDO", natureza: "Doméstica" },
  ).count();
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: passaredoTotalDomesticFlys });
db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0 });
