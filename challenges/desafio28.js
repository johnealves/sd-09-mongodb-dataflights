const LABrasil = "LATAM AIRLINES BRASIL";
const totalVoosDomesticos = db.voos.find({
  "empresa.nome": LABrasil,
  natureza: "Doméstica",
}).count();
db.resumoVoos.insertOne({ empresa: LABrasil, totalVoosDomesticos });
db.resumoVoos.findOne({ empresa: LABrasil }, { _id: 0 });
