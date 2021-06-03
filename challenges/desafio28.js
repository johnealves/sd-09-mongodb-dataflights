const EMPRESA = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  {
    empresa: EMPRESA,
    totalVoosDomesticos: db.voos.count(
      { $and: [{ "empresa.nome": EMPRESA }, { natureza: "Doméstica" }] },
    ),
  },
);

db.resumoVoos.find({ empresa: EMPRESA }, { _id: 0 });
