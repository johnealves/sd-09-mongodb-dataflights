const PASSAREDO = "PASSAREDO";

const findData = db.voos.countDocuments({ "empresa.nome": PASSAREDO, natureza: "Doméstica" });

db.resumoVoosDomesticos.insertOne({ empresa: PASSAREDO, totalVoosDomesticos: findData });

db.resumoVoosDomesticos.find({ empresa: PASSAREDO }, 
{ _id: 0, empresa: 1, totalVoosDomesticos: 1 }).limit(1);
