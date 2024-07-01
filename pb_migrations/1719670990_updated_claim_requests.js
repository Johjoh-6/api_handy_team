/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pugrgfeirqz59lk")

  collection.listRule = "playerID.teams_via_players.manager.id = @request.auth.id"
  collection.viewRule = " playerID.teams_via_players.manager.id = @request.auth.id"
  collection.updateRule = "playerID.teams_via_players.manager.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pugrgfeirqz59lk")

  collection.listRule = "@request.auth.id != \"\" || playerID.teams_via_players.manager.id = @request.auth.id"
  collection.viewRule = "@request.auth.id != \"\" || playerID.teams_via_players.manager.id = @request.auth.id"
  collection.updateRule = "@request.auth.id != \"\" || playerID.teams_via_players.manager.id = @request.auth.id"

  return dao.saveCollection(collection)
})
