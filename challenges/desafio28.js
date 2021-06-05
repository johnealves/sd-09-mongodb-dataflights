const company = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
  {
    empresa: company,
    totalVoosDosmesticos: db.voos.count({
      $and: [
        { "empresa.nome": company },
        { natureza: "Doméstica" },
      ],
    }),
  },
);

db.resumoVoos.findOne(
  { empresa: company },
  { _id: 0 },
);
