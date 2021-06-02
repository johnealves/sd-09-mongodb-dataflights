db.voos.deleteMany({ $and: [
  { "nome.empresa": "AZUL" }, { litrosCombustivel: { $lt: 400 } }],
});