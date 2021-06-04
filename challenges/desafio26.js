db.voos.deleteMany({ "empresa.nome": { $eq: "GOL" }, "passageiros.pagos": { $in: [5, 10] } });
