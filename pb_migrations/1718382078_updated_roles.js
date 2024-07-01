/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("04w2a00o1d4qfgc")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.role ?= @collection.roles.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("04w2a00o1d4qfgc")

  collection.listRule = null

  return dao.saveCollection(collection)
})
