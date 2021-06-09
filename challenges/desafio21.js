db.voos.findOne({ litrosCombustivel: { $exists: true, $gt: 1000 } }, { _id: 0, vooId: 1 });
