/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kgidga7tgpi4ju7",
    "created": "2024-06-12 09:49:09.449Z",
    "updated": "2024-06-12 09:49:09.449Z",
    "name": "event_type",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ygyxbods",
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
      "CREATE INDEX `idx_W8n2EGk` ON `event_type` (`name`)"
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
  const collection = dao.findCollectionByNameOrId("kgidga7tgpi4ju7");

  return dao.deleteCollection(collection);
})
