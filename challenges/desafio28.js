// 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
// Para isso, escreva no arquivo desafio28.js duas queries, nesta ordem:

// Conte quantos voos da empresa LATAM AIRLINES BRASIL cujo campo natureza possua valor igual a Doméstica e crie uma query que insira na coleção resumoVoos um documento com os campos: empresa (nome da empresa) e totalVoosDomesticos (o total retornado anteriormente).
const empresa = "LATAM AIRLINES BRASIL";
const counter = db.voos.find({ "empresa.nome": empresa,
  natureza: "Doméstica" }).count();

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: counter,
});

// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro documento presente na coleção resumoVoos em que a empresa seja LATAM AIRLINES BRASIL.
db.resumoVoos.findOne({ empresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
