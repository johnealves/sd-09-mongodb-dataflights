db.voos.findOne(
  {
    litrosCombustivel: {$not: {$gt: 600}},
    "empresa.nome": {$not: {$eq: "GOL", $eq: "AZUL"}},
    litrosCombustivel: {$exists: true}
  },
  {
    vooId: 1,
    _id: 0,
    litrosCombustivel: 1,
    "empresa.nome": 1
  }
);
