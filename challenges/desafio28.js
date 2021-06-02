const empresaSelecionada = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
  {
    empresa: empresaSelecionada,
    totalVoosDomesticos: db.voos.find(
      { $and: [{ "empresa.nome": empresaSelecionada }, { natureza: "Doméstica" }] },
    ).count(),
  },
);

db.resumoVoos.findOne({ empresa: empresaSelecionada }, { _id: 0 });
