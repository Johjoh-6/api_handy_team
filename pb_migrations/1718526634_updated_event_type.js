/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kgidga7tgpi4ju7")

  collection.listRule = "@request.auth.id != \"\"  && id ?= @collection.event_type.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kgidga7tgpi4ju7")

  collection.listRule = "@request.auth.id != \"\" "

  return dao.saveCollection(collection)
})
