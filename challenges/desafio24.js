db.voos.find(
  {
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
    litrosCombustivel: { $exists: true, $lte: 600 },
  },
  {
    _id: false,
    vooId: true,
    "empresa.nome": true,
    litrosCombustivel: true,
  },
).limit(1);
