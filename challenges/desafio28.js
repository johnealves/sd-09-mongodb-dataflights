const nome = "LATAM AIRLINES BRASIL";
const a = db.voos.countDocuments({ "empresa.nome": nome,
 natureza: "Doméstica" });
db.resumoVoos.insertOne({ empresa: nome, totalVoosDomesticos: a });
db.resumoVoos.find({ empresa: nome }, 
{ _id: 0, empresa: 1, totalVoosDomesticos: 1 });
