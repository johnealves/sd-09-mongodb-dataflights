db.voos.findOne(
    {
        $nor: [
            { litrosCombustivel: { $exists: false } },
            { litrosCombustivel: { $gt: 1000 } },
        ],
    },
    { 
        _id: 0, vooId: 1, litrosCombustivel: 1,
    },
);