db.voos.find({
  litrosCombustivel:
    { $exists: true, $eq: 1000, $gt: 1000 },
},
  { vooId: 1, _id: 0 }).limit(1);