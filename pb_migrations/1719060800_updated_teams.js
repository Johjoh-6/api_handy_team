/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3u8chacrgk71bd6")

  collection.updateRule = "manager.id = @request.auth.id "
  collection.deleteRule = "manager.id = @request.auth.id "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3u8chacrgk71bd6")

  collection.updateRule = "@request.auth.id = @collection.teams.manager.id "
  collection.deleteRule = "@request.auth.id = @collection.teams.manager.id "

  return dao.saveCollection(collection)
})
