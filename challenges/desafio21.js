db.voos.findOne(
  { litrosCombustivel: { $exists: 1, $gt: 1000 } },
  { _id: 0, vooId: 1 },
);