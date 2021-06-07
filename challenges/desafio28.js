db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.count({ natureza: "Doméstica", 
  "empresa.nome": "LATAM AIRLINES BRASIL" }),
});
db.resumoVoos.findOne({ empresa: /LATAM AIRLINES BRASI/ }, { _id: 0 });