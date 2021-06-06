const latamBr = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: latamBr,
  totalVoosDomesticos: db.voos.countDocuments({
    natureza: "Doméstica",
    "empresa.nome": latamBr,
  }),
});

db.resumoVoos.findOne({ empresa: latamBr }, { _id: 0 });
