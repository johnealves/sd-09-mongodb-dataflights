db.resumoVoos.insertOne({
  empresa: "PASSAREDO",
  totalVoosDosmesticos: db.voos.count({
    $and: [
      { "empresa.nome": "PASSAREDO" },
      { natureza: "Doméstica" },
    ],
  }),
});

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  { _id: 0 },
);
