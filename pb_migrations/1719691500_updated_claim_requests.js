/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pugrgfeirqz59lk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "supu9xuz",
    "name": "message",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pugrgfeirqz59lk")

  // remove
  collection.schema.removeField("supu9xuz")

  return dao.saveCollection(collection)
})
