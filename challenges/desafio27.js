const empresa = "PASSAREDO";
const natureza = "Doméstica";
const totalVoosDomesticos = db.voos.find(
  {
    natureza,
    "empresa.nome": empresa,
  },
).count();

db.resumoVoos.insertOne(
  {
    empresa,
    totalVoosDomesticos,
  },
);

db.resumoVoos.find({ empresa }, { _id: 0 });
