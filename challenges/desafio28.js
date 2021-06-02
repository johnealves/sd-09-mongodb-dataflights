const nome = "LATAM AIRLINES BRASIL";

const numeroDeVoos = db.voos.count({
  natureza: "Doméstica",
  "empresa.nome": nome,
});

db.resumoVoos.insertOne({
  empresa: nome,
  totalVoosDomesticos: numeroDeVoos,
});

db.resumoVoos.find(
  { empresa: nome },
  { _id: 0 },
).limit(1);
