/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k3vgbfiy",
    "name": "handy_point",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": -2,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  // remove
  collection.schema.removeField("k3vgbfiy")

  return dao.saveCollection(collection)
})
