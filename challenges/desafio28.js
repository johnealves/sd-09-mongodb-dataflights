const empresa = "LATAM AIRLINES BRASIL";
const totalVoosDomesticos = db.voos.countDocuments({
  "empresa.nome": empresa,
  natureza: "Doméstica",
});

db.resumoVoos.insertOne({ empresa, totalVoosDomesticos });

db.resumoVoos.findOne({ empresa }, { _id: 0 });