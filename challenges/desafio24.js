db.voos.findOne(
  {
    litrosCombustivel: { $exists: true, $not: { $lt: 600 } },
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
  },
  { listrosCombustivel: 1, vooId: 1, _id: 0 },
);
