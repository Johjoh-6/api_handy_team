/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("83v7wg4kaczxko5")

  collection.deleteRule = "team.manager.id = @request.auth.id "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("83v7wg4kaczxko5")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
