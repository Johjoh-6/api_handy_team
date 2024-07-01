/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  collection.updateRule = "user_link.id = @request.auth.id || @request.auth.id = teams_via_players.manager.id"
  collection.deleteRule = "@request.auth.id = teams_via_players.manager.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7")

  collection.updateRule = "user_link.id = @request.auth.id || @collection.teams.manager.id = @request.auth.id "
  collection.deleteRule = "@collection.teams.manager.id = @request.auth.id "

  return dao.saveCollection(collection)
})
