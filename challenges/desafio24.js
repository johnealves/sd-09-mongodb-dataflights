db.voos.findOne({
  $and: [{ litrosCombustivel: { $not: { $gt: 600 } } },
  { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  { litrosCombustivel: { $exists: true } }],
},
  { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true });
