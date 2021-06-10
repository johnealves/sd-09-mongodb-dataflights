db.resumoVoos.insert({
  empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.countDocuments({ 
    natureza: "Doméstica", 
    "empresa.nome": "PASSAREDO" }),
  });

db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });