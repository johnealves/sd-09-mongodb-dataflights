const ciaAerea = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({ empresa: ciaAerea,
    totalVoosDomesticos: db.voos.countDocuments({ "empresa.nome": ciaAerea,
    natureza: "Doméstica" }) });
db.resumoVoos.findOne({ empresa: ciaAerea }, { _id: false });