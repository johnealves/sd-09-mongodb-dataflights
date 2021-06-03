db.voos.find({ litrosCombustivel: { $exists: true, $gte: 1000 } },
  { _id: false, vooId: true }).limit(1);