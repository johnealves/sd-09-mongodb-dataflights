db.voos.deleteMany({ "empresa.nome": { $eq: "AZUL" }, combustivel: { $lt: 400 } });
