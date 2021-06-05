// Desafio 1
use('dataFlights');

db.voos.count();

// Desafio 2
use('dataFlights');
db.voos.find({}, { vooId: true }).skip(9).limit(3);

// Desafio 3
use('dataFlights');
db.voos.find({ "empresa.nome": "AZUL" }).count();

// Desafio 4
use('dataFlights');
db.voos.find({ "empresa.nome": "GOL" }).count();

// Desafio 5
use('dataFlights');
db.voos.find({}, { _id: false, vooId: true }).skip(9).limit(3);

// Desafio 6
use('dataFlights');

db.voos.find({ vooId: 756807 } , { _id: 0, "empresa.sigla" : true, "empresa.nome": 1, passageiros: 1 });

// requisito 7
use('dataFlights');
db.voos.find({ ano: { $lt: 2017 }}).count();
