const numeroDeVoos = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": "PASSAREDO",
});

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos: numeroDeVoos,
});

db.resumoVoos.find({ empresa: "PASSAREDO" }, { _id: 0 }).limit(1);