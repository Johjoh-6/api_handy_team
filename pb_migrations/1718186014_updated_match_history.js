/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vu52mtu5epolvdv")

  collection.indexes = [
    "CREATE INDEX `idx_IP9TqC6` ON `match_history` (\n  `name`,\n  `match_date`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vu52mtu5epolvdv")

  collection.indexes = []

  return dao.saveCollection(collection)
})
