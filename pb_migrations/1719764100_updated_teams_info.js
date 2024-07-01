/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k46oqjcz3hx24k9")

  collection.options = {
    "query": "SELECT\n    teams.id,\n    teams.name,\n    teams.logo,\n    sports.name as sport_name,\n    users.last_name as manager_last,\n    users.first_name as manager_first,\n    teams.players as players\nFROM\n    teams\nLEFT JOIN\n    users ON users.id = teams.manager\nLEFT JOIN\n    sports ON sports.id = teams.sport\nGROUP BY\n    teams.id,\n    teams.name,\n    teams.logo,\n    sports.name,\n    users.last_name,\n    users.first_name\n"
  }

  // remove
  collection.schema.removeField("qyidzxhh")

  // remove
  collection.schema.removeField("h8kysqcd")

  // remove
  collection.schema.removeField("yurqxhly")

  // remove
  collection.schema.removeField("up2dsfdy")

  // remove
  collection.schema.removeField("mw50pyup")

  // remove
  collection.schema.removeField("nccdlfb6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6faazo4i",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2xdtrq9w",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x1qxkeb8",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dbhhinnl",
    "name": "manager_last",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g42xaixu",
    "name": "manager_first",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sif3fv8h",
    "name": "players",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yka72m469fa0nl7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k46oqjcz3hx24k9")

  collection.options = {
    "query": "SELECT\n    teams.id,\n    teams.name,\n    teams.logo,\n    sports.name as sport_name,\n    users.last_name as manager_last,\n    users.first_name as manager_first,\n    COUNT(teams.players) as player_nb\nFROM\n    teams\nLEFT JOIN\n    users ON users.id = teams.manager\nLEFT JOIN\n    sports ON sports.id = teams.sport\n  LEFT JOIN \nplayers ON players.id = teams.players\nGROUP BY\n    teams.id,\n    teams.name,\n    teams.logo,\n    sports.name,\n    users.last_name,\n    users.first_name\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qyidzxhh",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h8kysqcd",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yurqxhly",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "up2dsfdy",
    "name": "manager_last",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mw50pyup",
    "name": "manager_first",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nccdlfb6",
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
  }))

  // remove
  collection.schema.removeField("6faazo4i")

  // remove
  collection.schema.removeField("2xdtrq9w")

  // remove
  collection.schema.removeField("x1qxkeb8")

  // remove
  collection.schema.removeField("dbhhinnl")

  // remove
  collection.schema.removeField("g42xaixu")

  // remove
  collection.schema.removeField("sif3fv8h")

  return dao.saveCollection(collection)
})
