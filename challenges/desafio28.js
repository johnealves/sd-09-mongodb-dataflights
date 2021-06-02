const empresaNome = "LATAM AIRLINES BRASIL";
const totalVoosDomesticos = db.voos.countDocuments(
  {
    "empresa.nome": empresaNome,
    natureza: "Doméstica",
  },
);

db.resumoVoos.insertOne(
  {
    empresa: empresaNome,
    totalVoosDomesticos,
  },
);

db.resumoVoos.findOne(
  {
    empresa: empresaNome,
  },
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
);
