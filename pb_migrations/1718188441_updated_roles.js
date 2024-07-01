/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("04w2a00o1d4qfgc")

  collection.listRule = "@request.auth.id != \"\""
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.id = users_via_role.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("04w2a00o1d4qfgc")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
