db.voos.findOne(
  {
    litrosCombustivel: { $exists: true, $not: { $gt: 600 } },
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
  },
  { litrosCombustivel: 1, vooId: 1, _id: 0 },
);
