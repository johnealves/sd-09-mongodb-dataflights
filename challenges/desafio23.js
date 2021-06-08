db.voos.findOne(
  {
    "litrosCombustivel": {$not: {$gt: 600}},
    "litrosCombustivel": {$exists: true}
  },
  { vooId: 1, _id: 0, litrosCombustivel: 1 },
);
