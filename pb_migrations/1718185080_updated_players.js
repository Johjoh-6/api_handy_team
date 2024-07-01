/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  // remove
  collection.schema.removeField("vosds2mx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hkblo5ux",
    "name": "height",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 300,
      "noDecimal": false
    }
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wuoz61j4",
    "name": "user_link",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vosds2mx",
    "name": "hna",
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

  // remove
  collection.schema.removeField("hkblo5ux")

  // remove
  collection.schema.removeField("nixwpdbp")

  // remove
  collection.schema.removeField("wuoz61j4")

  return dao.saveCollection(collection)
})
