const counter = db.voos.count(
  { "empresa.nome": { $eq: "LATAM AIRLINES BRASIL" }, natureza: { $eq: "Doméstica" } },
);
db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: counter });
db.resumoVoos.find({}, { _id: 0 });