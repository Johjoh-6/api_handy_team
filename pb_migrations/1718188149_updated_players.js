/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  collection.listRule = "user_link.id = @request.auth.id || @collection.teams.players.id = id"
  collection.viewRule = "user_link.id = @request.auth.id || @collection.teams.players.id = id"
  collection.createRule = ""
  collection.updateRule = "user_link.id = @request.auth.id || @collection.teams.players.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
