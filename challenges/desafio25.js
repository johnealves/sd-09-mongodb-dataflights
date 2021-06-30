db.voos.deleteMany({
  "empresa.name": "AZUL",
  litrosCombustivel: { $lt: 400 },
}, { deletedCount: 1 });