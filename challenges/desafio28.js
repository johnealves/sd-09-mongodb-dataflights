const name = "LATAM AIRLINES BRASIL";
const voos = db.voos.count(
  {
    "empresa.nome": name,
    natureza: "Doméstica",
  },
);

db.resumoVoos.insertOne(
  {
    empresa: name,
    totalVoosDomesticos: voos,
  },
);

db.resumoVoos.findOne(
  {
    empresa: "LATAM AIRLINES BRASIL",
  },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
);