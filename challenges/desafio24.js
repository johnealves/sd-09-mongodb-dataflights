db.voos.find(
  {
    litrosCombustivel: { $lt: 600, $exists: 1 },
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
  },
  {  _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 },
).limit(1);
