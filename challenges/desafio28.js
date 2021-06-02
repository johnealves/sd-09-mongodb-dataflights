const nome = "LATAM AIRLINES BRASIL";

const counter = db.voos
  .find({ "empresa.nome": nome, natureza: "Doméstica" })
  .count();

db.resumoVoos.insertOne({ empresa: nome, totalVoosDomesticos: counter });

db.resumoVoos
  .findOne({ empresa: nome }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
