/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "k46oqjcz3hx24k9",
    "created": "2024-06-16 13:36:39.893Z",
    "updated": "2024-06-16 13:36:39.893Z",
    "name": "teams_info",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uyyc9fzf",
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
      },
      {
        "system": false,
        "id": "zufu6plp",
        "name": "logo",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "pygxjuzf",
        "name": "sport_name",
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
        "id": "5wkmgjpz",
        "name": "player_nb",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT teams.id, teams.name, teams.logo, sports.name as sport_name,COUNT(teams.players) as player_nb\nFROM teams\nJOIN users ON users.id = teams.manager\nJOIN sports ON sports.id = teams.sport"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("k46oqjcz3hx24k9");

  return dao.deleteCollection(collection);
})
