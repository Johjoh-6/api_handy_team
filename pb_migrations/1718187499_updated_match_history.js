/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vu52mtu5epolvdv")

  collection.listRule = "team.manager.id = @request.auth.id || team.players.user_link.id = @request.auth.id || team_opponent.manager.id = @request.auth.id || team_opponent.players.user_link.id = @request.auth.id"
  collection.viewRule = "team.manager.id = @request.auth.id || team.players.user_link.id = @request.auth.id || team_opponent.manager.id = @request.auth.id || team_opponent.players.user_link.id = @request.auth.id"
  collection.createRule = "team.manager.id = @request.auth.id "
  collection.updateRule = "team.manager.id = @request.auth.id "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vu52mtu5epolvdv")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
