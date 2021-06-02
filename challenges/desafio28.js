const nomeEmpresa = "LATAM AIRLINES BRASIL";
const quantidadeVoos = db.voos.count(
  { "empresa.nome": nomeEmpresa, natureza: "Doméstica" },
);
db.resumoVoos.insertOne({ empresa: nomeEmpresa, totalVoosDomesticos: quantidadeVoos });
db.resumoVoos.findOne({ empresa: nomeEmpresa }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
