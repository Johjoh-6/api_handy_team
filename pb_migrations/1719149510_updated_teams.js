/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3u8chacrgk71bd6")

  // remove
  collection.schema.removeField("dtxmfsxw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jarndhf8",
    "name": "description",
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
  const collection = dao.findCollectionByNameOrId("3u8chacrgk71bd6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtxmfsxw",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("jarndhf8")

  return dao.saveCollection(collection)
})
