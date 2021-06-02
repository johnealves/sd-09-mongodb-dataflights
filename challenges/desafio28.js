const empresa = "LATAM AIRLINES BRASIL";

const totalVoosDomesticos = db.voos
    .countDocuments({ "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" });

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos,
});

db.resumoVoos.findOne(
  { empresa },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);