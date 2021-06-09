db.voos.findOne(
  {
    litroCombustivel: { $exists: true, $lte: 1000 },
  }, { _id: 0, vooId: 1, litroCombustivel: 1 },
);