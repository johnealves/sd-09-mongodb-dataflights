const LATAM_AIRLINES_BRASIL = "LATAM AIRLINES BRASIL";

const total = db.voos.countDocuments({ "empresa.nome": LATAM_AIRLINES_BRASIL, 
natureza: "Doméstica" });

db.resumoVoos.insertOne({ empresa: LATAM_AIRLINES_BRASIL, totalVoosDomesticos: total });

db.resumoVoos.find({ empresa: LATAM_AIRLINES_BRASIL }, 
{ _id: 0, empresa: 1, totalVoosDomesticos: 1 }).limit(1);
