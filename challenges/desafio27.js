const nomeEmpresa = "PASSAREDO";
const valorTotal = db.voos.count({
  "empresa.nome": nomeEmpresa,
  natureza: "Doméstica",
});
db.resumoVoos.insertOne({
  empresa: nomeEmpresa,
  totalVoosDomesticos: valorTotal,
});
db.resumoVoos.find(
  {
    empresa: nomeEmpresa,
  },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
).limit(1);
