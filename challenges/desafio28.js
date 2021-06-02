const NOME_EMPRESA = "LATAM AIRLINES BRASIL";

db.resumoVoos.insert({
  empresa: NOME_EMPRESA,
  totalVoosDomesticos: db.voos.countDocuments({ 
    natureza: "Doméstica", 
    "empresa.nome": NOME_EMPRESA }),
  });

db.resumoVoos.findOne({
  empresa: NOME_EMPRESA },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 });