const nome = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: nome,
  totalVoosDomesticos: db.voos.count({ $and: [
    { "empresa.nome": nome },
    { natureza: "Doméstica" }] }) });

db.resumoVoos.findOne(
  { empresa: nome },
  { _id: 0 },
);
