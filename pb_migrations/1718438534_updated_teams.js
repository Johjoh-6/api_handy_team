/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3u8chacrgk71bd6")

  collection.listRule = "@request.auth.id != \"\" "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3u8chacrgk71bd6")

  collection.listRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
})
