db.voos.findOne(
    { 
      $and:
      [
        { $nor:
          [
            { litrosCombustivel: { $gt: 600 } },
            { }
          ],
        },
        {
          litrosCombustivel: { $exists: true },
        },
      ],
    }, { _id: 0, vooId: 1, litrosCombustivel: 1 },
    );
