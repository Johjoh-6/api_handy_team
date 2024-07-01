/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kgidga7tgpi4ju7")

  collection.listRule = "@collection.events.type.id = id"
  collection.viewRule = "@collection.events.type.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kgidga7tgpi4ju7")

  collection.listRule = "@collection.event_type.id = id"
  collection.viewRule = "@collection.event_type.id = id"

  return dao.saveCollection(collection)
})
