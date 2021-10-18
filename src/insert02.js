db.inventory.deleteMany()

db.inventory.insertOne(
    { item: "canvas", 
    qty: 100, tags: ["cotton"], 
    size: {
         h: 28, 
         w: 35.5, 
         uom: "cm" 
        } 
    }
 )


 db.inventoy.deleteMany()
//INSERT DE ARRAY DE DOCUMENTOS
 db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])


 db.inventory.deleteMany()
 db.inventoy.insertMany([
 { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] },
 { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] },
 { _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] },
 { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] },
 { _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] },
])                                                                                                                                                              



