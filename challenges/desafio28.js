const NOME_EMPRESA = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: NOME_EMPRESA,
  totalVoosDomesticos: db.voos.countDocuments({
    "empresa.nome": NOME_EMPRESA,
    natureza: "Doméstica",
  }),
});

db.resumoVoos.findOne({ empresa: NOME_EMPRESA }, {
  _id: 0,
  empresa: 1,
  totalVoosDomesticos: 1,
});