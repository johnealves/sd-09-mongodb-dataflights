db.voos.findOne({ litrosCombustivel: { $exists: true } },
  {
  vooId: true,
  _id: 0,
});
