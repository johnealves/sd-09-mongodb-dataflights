db.resumoVoos.insertOne(
  {
    empresa: "PASSAREDO",
    voosDosmesticos: db.voos.count(
      {
        "empresa.nome": "PASSAREDO",
        natureza: "Doméstica",
      },
    ),
  },
);

db.resumoVoos.find(
  { empresa: "PASSAREDO" },
  { _id: 0 },
);
