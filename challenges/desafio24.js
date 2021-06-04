db.voos.findOne({ $and: [{ litrosCombustivel: { $lte: 600 } },
{ empresa: { $nin: ["GOL", "azul"] } }] },
{ vooId: 1, litrosCombustivel: 1, "empresa.nome": 1, _id: 0 });