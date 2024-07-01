/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7ilhfm4qcp7yv8")

  collection.listRule = "team.manager.id = @request.auth.id"
  collection.viewRule = "team.manager.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7ilhfm4qcp7yv8")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
