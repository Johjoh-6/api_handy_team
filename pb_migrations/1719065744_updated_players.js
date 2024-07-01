/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nixwpdbp",
    "name": "weight",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 250,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nixwpdbp",
    "name": "weigth",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 250,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
