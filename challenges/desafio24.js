db.voos.findOne({ litrosCombustivel: { $exists: true, $not: { $gt: 600 } },
  "empresa.nome": { $ne: "GOL" } }, { _id: 0,
vooId: 1,
"empresa.nome": 1,
  litrosCombustivel: 1 });