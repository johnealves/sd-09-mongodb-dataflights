db.voos.findOne({ litrosCombustivel: { $lte: 600 } }, 
  { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true });