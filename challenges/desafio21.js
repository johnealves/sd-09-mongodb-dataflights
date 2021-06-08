db.voos.findOne(
  { litrosCombustivel: { $exists: true, $gt: 1000 } },
  { vooId: 1, _id: 0 },
);
