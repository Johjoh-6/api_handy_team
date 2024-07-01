/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i7ilhfm4qcp7yv8",
    "created": "2024-06-12 09:59:32.176Z",
    "updated": "2024-06-12 09:59:32.176Z",
    "name": "bills",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4sh6fq6f",
        "name": "team",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "3u8chacrgk71bd6",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "0u19o8kb",
        "name": "amount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "ctnpbktr",
        "name": "currency",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "EUR",
            "USD"
          ]
        }
      },
      {
        "system": false,
        "id": "7xqyjoqs",
        "name": "id_payment",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "din4fccr",
        "name": "bill_date",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("i7ilhfm4qcp7yv8");

  return dao.deleteCollection(collection);
})
