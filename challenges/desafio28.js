const airlineName = "LATAM AIRLINES BRASIL";
const flightNumber = db.voos.count(
  { "empresa.nome": airlineName, natureza: "Doméstica" },
);
db.resumoVoos.insertOne(
  {
    empresa: airlineName,
    totalVoosDomesticos: flightNumber,
  },
);
db.resumoVoos.findOne(
  {
    empresa: airlineName },
  {
    empresa: 1,
    totalVoosDomesticos: 1,
    _id: 0,
  },
);
