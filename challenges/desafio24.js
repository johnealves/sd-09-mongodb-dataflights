db.voos.findOne({
    $nor: [
        { litrosCombustivel: { $exists: false } },
        { litrosCombustivel: { $gt: 600 } },
        { "empresa.nome": { $in: ["GOL", "AZUL"] } },
    ],
    }, 
    {
        _id: 0,
        vooId: 1,
        "empresa.nome": 1,
        litrosCombustivel: 1,
    });