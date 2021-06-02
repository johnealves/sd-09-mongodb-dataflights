const empresaAerea = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ empresa: empresaAerea,
  totalVoosDomesticos: db.voos.countDocuments({
    "empresa.nome": { $eq: "LATAM AIRLINES BRASIL" },
    natureza: { $eq: "Doméstica" } }),
  });

  db.resumoVoos.find({ empresa: { $eq: empresaAerea } }, { _id: 0 });