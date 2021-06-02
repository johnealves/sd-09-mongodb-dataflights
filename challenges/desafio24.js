db.voos.findOne(
  {
    $and: [
      { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $lte: 600 } },
    ],
  },
  { _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 },
);
