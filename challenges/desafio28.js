const empresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
  {
    empresa,
    totalVoosDomesticos: db.voos.count(
        {
          "empresa.nome": empresa,
          natureza: "Doméstica",
        },
      ) },
  );

db.resumoVoos.find(
  {
    empresa: "LATAM AIRLINES BRASIL",
  },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
).limit(1);