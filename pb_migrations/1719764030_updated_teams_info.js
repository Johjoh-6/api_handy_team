/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k46oqjcz3hx24k9")

  collection.options = {
    "query": "SELECT\n    teams.id,\n    teams.name,\n    teams.logo,\n    sports.name as sport_name,\n    users.last_name as manager_last,\n    users.first_name as manager_first,\n    COUNT(teams.players) as player_nb\nFROM\n    teams\nLEFT JOIN\n    users ON users.id = teams.manager\nLEFT JOIN\n    sports ON sports.id = teams.sport\n  LEFT JOIN \nplayers ON players.id = teams.players\nGROUP BY\n    teams.id,\n    teams.name,\n    teams.logo,\n    sports.name,\n    users.last_name,\n    users.first_name\n"
  }

  // remove
  collection.schema.removeField("njp0dwub")

  // remove
  collection.schema.removeField("xzdddh5z")

  // remove
  collection.schema.removeField("cpohnzdf")

  // remove
  collection.schema.removeField("hrh9ertu")

  // remove
  collection.schema.removeField("rmquqjhe")

  // remove
  collection.schema.removeField("sycyackj")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k46oqjcz3hx24k9")

  collection.options = {
    "query": "SELECT\n    teams.id,\n    teams.name,\n    teams.logo,\n    sports.name as sport_name,\n    users.last_name as manager_last,\n    users.first_name as manager_first,\n    COUNT(teams.players) as player_nb\nFROM\n    teams\nLEFT JOIN\n    users ON users.id = teams.manager\nLEFT JOIN\n    sports ON sports.id = teams.sport\nGROUP BY\n    teams.id,\n    teams.name,\n    teams.logo,\n    sports.name,\n    users.last_name,\n    users.first_name\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "njp0dwub",
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
    "id": "xzdddh5z",
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
    "id": "cpohnzdf",
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
    "id": "hrh9ertu",
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
    "id": "rmquqjhe",
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
    "id": "sycyackj",
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

  return dao.saveCollection(collection)
})
