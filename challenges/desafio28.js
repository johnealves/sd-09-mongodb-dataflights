db.resumoVoos.insertOne(
  {
    empresa: "LATAM AIRLINES BRASILSSAREDO",
    voosDosmesticos: db.voos.count(
      {
        "empresa.nome": "LATAM AIRLINES BRASIL",
        natureza: "Doméstica",
      },
    ),
  },
);

db.resumoVoos.find(
  { empresa: "LATAM AIRLINES BRASIL" },
  { _id: 0 },
);
