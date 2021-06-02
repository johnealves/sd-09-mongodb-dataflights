db.voos.countDocuments(
  {
    "aeroportoOrigem.pais": {
      $not: { $eq: "BRASIL" },
    },
  },
);
