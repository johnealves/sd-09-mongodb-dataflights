db.voos.findOne({
    litrosCombustivel: { $exists: true, $lte: 600 },
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
},
    { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true });