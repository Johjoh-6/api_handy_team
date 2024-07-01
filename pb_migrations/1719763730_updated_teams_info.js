/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k46oqjcz3hx24k9")

  collection.options = {
    "query": "SELECT\n    teams.id,\n    teams.name,\n    teams.logo,\n    sports.name as sport_name,\n    users.last_name as manager_last,\n    users.first_name as manager_first,\n    COUNT(teams.players) as player_nb\nFROM\n    teams\nLEFT JOIN\n    users ON users.id = teams.manager\nLEFT JOIN\n    sports ON sports.id = teams.sport\nGROUP BY\n    teams.id,\n    teams.name,\n    teams.logo,\n    sports.name,\n    users.last_name,\n    users.first_name\n"
  }

  // remove
  collection.schema.removeField("lxjgavyt")

  // remove
  collection.schema.removeField("eiwmo4xn")

  // remove
  collection.schema.removeField("at4voehj")

  // remove
  collection.schema.removeField("pp6qtlj2")

  // remove
  collection.schema.removeField("65emdivw")

  // remove
  collection.schema.removeField("o798raqg")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k46oqjcz3hx24k9")

  collection.options = {
    "query": "SELECT teams.id, teams.name, teams.logo, sports.name as sport_name,  users.last_name as manager_last, users.first_name as manager_first, COUNT(teams.players) as player_nb\nFROM teams\nLEFT JOIN users ON users.id = teams.manager\nLEFT JOIN sports ON sports.id = teams.sport\nGROUP BY teams.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxjgavyt",
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
    "id": "eiwmo4xn",
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
    "id": "at4voehj",
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
    "id": "pp6qtlj2",
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
    "id": "65emdivw",
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
    "id": "o798raqg",
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

  return dao.saveCollection(collection)
})
