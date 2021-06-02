db.voos.find(
  { vooId: { $eq: 756807 } },
  { _id: 0, passageiros: 1, "empresa.sigla": 1, "empresa.nome": 1 },
);
