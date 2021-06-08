db.voos.findOne(
    { litrosCombustivel: { $exists: true, $lt: 1000 } },
    { listrosCombustivel: 1, vooId: 1, _id: 0 },
  );
