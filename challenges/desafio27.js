const counter = db.voos.count(
  { "empresa.nome": { $eq: "PASSAREDO" }, natureza: { $eq: "Doméstica" } },
);
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: counter });
db.resumoVoos.find({}, { _id: 0 });