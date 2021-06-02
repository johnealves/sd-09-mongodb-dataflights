const counter = db.voos
  .find({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" })
  .count();

db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: counter });

db.resumoVoos
  .findOne({ empresa: "LATAM AIRLINES BRASIL" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
