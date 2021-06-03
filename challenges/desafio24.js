db.voos.findOne(
  { 
    $and: [
      { litrosCombustivel: { $exists: true } },
      {
        $nor: [
          { litrosCombustivel: { $gt: 600 } },
          { "empresa.nome": { $in: ["GOL", "AZUL"] } },
        ],
      },
    ],
  },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
