/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l54wjvf6ecfn254",
    "created": "2024-06-12 09:38:21.691Z",
    "updated": "2024-06-12 09:38:21.691Z",
    "name": "positions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xrqdunrc",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_hWzOsAM` ON `positions` (`name`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l54wjvf6ecfn254");

  return dao.deleteCollection(collection);
})
