const latam = "LATAM AIRLINES BRASIL";
const totalFlights = db.voos.count(
  { "empresa.nome": latam, natureza: "Doméstica" },
);
db.resumoVoos.insertOne({ empresa: latam, totalVoosDomesticos: totalFlights });
db.resumoVoos.findOne({ empresa: latam }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
