db.voos.find({ "passageiros.pagos": { $gt: 7000 } }).limit(1);
