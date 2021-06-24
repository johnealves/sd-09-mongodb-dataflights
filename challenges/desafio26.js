db.voos.deleteMany({
  "empresa.nome": "GOL",
  qty: { $in: [5, 10] },
});