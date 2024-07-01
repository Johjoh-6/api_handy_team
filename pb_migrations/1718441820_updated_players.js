/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  collection.listRule = "user_link.id = @request.auth.id || @collection.teams.players.id ?= id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  collection.listRule = "user_link.id = @request.auth.id || @collection.teams.players.id ?= id "

  return dao.saveCollection(collection)
})
