db.voos.deleteMany({ "empresa.nome": { $eq: "AZUL" }, "passageiros.pagos": { $in: [5, 10] } });
