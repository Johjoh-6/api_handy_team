/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yka72m469fa0nl7",
    "created": "2024-06-12 09:35:38.625Z",
    "updated": "2024-06-12 09:35:38.625Z",
    "name": "players",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wgrrcbnr",
        "name": "first_name",
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
        "id": "ry2xwbes",
        "name": "last_name",
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
        "id": "icvukvmo",
        "name": "handy_comment",
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
        "id": "gfmtaqjy",
        "name": "biography",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": true
        }
      },
      {
        "system": false,
        "id": "qvidyutf",
        "name": "claimed",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "s4zzz1ho",
        "name": "player_number",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 200,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "yhsnq6gq",
        "name": "bod",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "1950-01-01 12:00:00.000Z",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "vosds2mx",
        "name": "hna",
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
  const collection = dao.findCollectionByNameOrId("yka72m469fa0nl7");

  return dao.deleteCollection(collection);
})
