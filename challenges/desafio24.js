db.voos.findOne(
    { 
        $and: 
        [
            { 
                litrosCombustivel: 
                { 
                    $exists: true, 
                    $ne: 
                    { 
                        $gt: 600, 
                    }, 
                }, 
            }, 
            { 
                "empresa.nome": 
                { 
                    $in: 
                    [ 
                        "GOL", 
                        "AZUL",
                    ], 
                }, 
            },
        ], 
    }, 
    { 
        vooId: 1, 
        "empresa.nome": 1, 
        litrosCombustivel: 1, 
        _id: 0, 
    },
    );