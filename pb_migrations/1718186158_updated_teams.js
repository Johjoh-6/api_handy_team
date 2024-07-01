/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3u8chacrgk71bd6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tpdw6373",
    "name": "premium",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3u8chacrgk71bd6")

  // remove
  collection.schema.removeField("tpdw6373")

  return dao.saveCollection(collection)
})
