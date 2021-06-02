const empresaAerea = "PASSAREDO";

db.resumoVoos.insertOne({ empresa: empresaAerea,
totalVoosDomesticos: db.voos.countDocuments({
  "empresa.nome": { $eq: "PASSAREDO" },
  natureza: { $eq: "Doméstica" } }) });

  db.resumoVoos.find({ empresa: { $eq: empresaAerea } }, { _id: 0 });