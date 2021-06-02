const totalVoosDomesticos = db.voos.countDocuments({
  "empresa.nome": "PASSAREDO",
  natureza: "Doméstica",
});

db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDomesticos,
});

db.resumoVoos.findOne({}, { _id: 0 });