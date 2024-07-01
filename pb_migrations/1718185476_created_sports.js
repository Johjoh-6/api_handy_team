/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a6be4bx88olu9ls",
    "created": "2024-06-12 09:44:36.846Z",
    "updated": "2024-06-12 09:44:36.846Z",
    "name": "sports",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9szdcce4",
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
      "CREATE INDEX `idx_LsJ1fGm` ON `sports` (`name`)"
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
  const collection = dao.findCollectionByNameOrId("a6be4bx88olu9ls");

  return dao.deleteCollection(collection);
})
