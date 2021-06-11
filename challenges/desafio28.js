db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos
    .find({ natureza: "Doméstica", "empresa.nome": "LATAM AIRLINES BRASIL" })
    .count(),
});

db.resumoVoos
  .find({ empresa: "LATAM AIRLINES BRASIL" }, { _id: false })
  .limit(1);
