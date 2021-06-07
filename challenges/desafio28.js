const empresa = "LATAM AIRLINES BRASIL";

const totalVoos = db.voos.countDocuments({
  "empresa.nome": empresa,
  natureza: "Doméstica",
});

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: totalVoos,
});

db.resumoVoos.findOne(
  { empresa },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
