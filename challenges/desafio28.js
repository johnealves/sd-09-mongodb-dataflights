const flightNumber = db.voos.count(
    { "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" },
);
db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: flightNumber });
db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
