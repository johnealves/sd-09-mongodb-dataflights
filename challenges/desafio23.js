db.voos.findOne(
    { litrosCombustivel: { $exists: true, $not: { $gt: 1000 } } },
    { litrosCombustivel: 1, vooId: 1, _id: 0 },
  );
