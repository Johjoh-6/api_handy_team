/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kgidga7tgpi4ju7")

  collection.listRule = "@request.auth.id != \"\" "
  collection.viewRule = "@request.auth.id != \"\" && events_via_type.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kgidga7tgpi4ju7")

  collection.listRule = "events_via_type.id = id"
  collection.viewRule = "events_via_type.id = id"

  return dao.saveCollection(collection)
})
