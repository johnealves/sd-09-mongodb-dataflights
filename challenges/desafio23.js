db.voos.find(
  {
    litrosCombustivel: { $lt: 1000, $exists: true },
  },
  {
    _id: false,
    vooId: true,
    litrosCombustivel: true,
  },
).limit(1);