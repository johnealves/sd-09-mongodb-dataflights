db.voos.findOne(
  { litrosCombustivel: { $exists: 1, $lt: 1000 } },
  { litrosCombustivel: 1, vooId: 1, _id: 0 },
);