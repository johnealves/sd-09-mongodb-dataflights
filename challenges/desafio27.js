const totalVoosDomesticos = db.voos.countDocuments(
  {
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  },
);

db.resumoVoos.insertOne(
  {
    empresa: "PASSAREDO",
    totalVoosDomesticos,
  },
);

db.resumoVoos.findOne(
  {
    empresa: "PASSAREDO",
  },
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
);
