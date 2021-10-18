
/*
Los que tienen el valor "canvas" en el campo item
*/

db.inventory.find({item: "canvas"})




/*
Hacer la misma consulta usando el operador $eq
*/

db.inventory.find( { item: { $eq: "canvas" } } )

/*
Los que tienen 20 en el campo qty. 
*/

db.inventory.find({qty:{Seq: 20 }})


//Los campos que tengan el code 123
db.inventory.find({item.code:{$eq: "canvas"}})