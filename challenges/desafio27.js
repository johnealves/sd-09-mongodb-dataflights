const EMPRESA = "PASSAREDO";

db.resumoVoos.insertOne({
  empresa: EMPRESA,
  totalVoosDomesticos: db.voos.find(
    {
      "empresa.nome": EMPRESA,
      natureza: "Doméstica"
    },
  ).count(),
});

db.resumoVoos.findOne({ empresa: EMPRESA }, { _id: 0 });