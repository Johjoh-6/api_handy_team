/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("83v7wg4kaczxko5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vv7qwi1n",
    "name": "note",
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
  const collection = dao.findCollectionByNameOrId("83v7wg4kaczxko5")

  // remove
  collection.schema.removeField("vv7qwi1n")

  return dao.saveCollection(collection)
})
