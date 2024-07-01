/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cczmmy0x",
    "name": "position",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "l54wjvf6ecfn254",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  // remove
  collection.schema.removeField("cczmmy0x")

  return dao.saveCollection(collection)
})
