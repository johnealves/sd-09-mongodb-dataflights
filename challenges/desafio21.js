db.voos.find(
  {
    litrosCombustivel: { $gte: false },
  },
  {
    vooId: 1,
    _id: 0,
  },
).limit(1);
