/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k46oqjcz3hx24k9")

  collection.options = {
    "query": "SELECT teams.id, teams.name, teams.logo, sports.name as sport_name,  users.last_name as manager_last, users.first_name as manager_first, COUNT(teams.players) as player_nb\nFROM teams\nLEFT JOIN users ON users.id = teams.manager\nLEFT JOIN sports ON sports.id = teams.sport\nGROUP BY teams.id"
  }

  // remove
  collection.schema.removeField("vpdjmhdi")

  // remove
  collection.schema.removeField("k9gfhcho")

  // remove
  collection.schema.removeField("t41cezp5")

  // remove
  collection.schema.removeField("tthrqjoo")

  // remove
  collection.schema.removeField("e1kq3dlr")

  // remove
  collection.schema.removeField("xpkcdd1b")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k46oqjcz3hx24k9")

  collection.options = {
    "query": "SELECT teams.id, teams.name, teams.logo, sports.name as sport_name,  users.last_name as manager_last, users.first_name as manager_first, COUNT(teams.players) as player_nb\nFROM teams\nLEFT JOIN users ON users.id = teams.manager\nLEFT JOIN sports ON sports.id = teams.sport"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vpdjmhdi",
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
    "id": "k9gfhcho",
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
    "id": "t41cezp5",
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
    "id": "tthrqjoo",
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
    "id": "e1kq3dlr",
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
    "id": "xpkcdd1b",
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

  return dao.saveCollection(collection)
})
