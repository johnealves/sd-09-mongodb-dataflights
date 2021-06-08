db.voos.find(
  {
    litrosCombustivel: { $exists: true, $lte: 1000 },
  },
  {
    _id: false,
    vooId: true,
    litrosCombustivel: true,
  },
).limit(1);
