db.voos.findOne(
    { 
      $nor: [
        {
          litrosCombustivel: { $gt: 600 },
        },
        {
          litrosCombustivel: { $exists: false },
        },
        {
          "empresa.nome": { $in: ["GOL", "AZUL"] },
        },
      ],
    },  
    { 
      _id: 0,
      "empresa.nome": 1,
      litrosCombustivel: 1,
    },
  );