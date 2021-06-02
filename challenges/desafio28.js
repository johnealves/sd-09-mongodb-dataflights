const empresaNome = "LATAM AIRLINES BRASIL";

const counter = db.voos
  .find({ "empresa.nome": empresaNome, natureza: "Doméstica" })
  .count();

db.resumoVoos.insertOne({ empresa: empresaNome, totalVoosDomesticos: counter });

db.resumoVoos
  .findOne({ empresa: empresaNome }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
