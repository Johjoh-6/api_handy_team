/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("k46oqjcz3hx24k9")

  collection.options = {
    "query": "SELECT teams.id, teams.name, teams.logo, sports.name as sport_name,  users.last_name as manager_last, users.first_name as manager_first, COUNT(teams.players) as player_nb\nFROM teams\nJOIN users ON users.id = teams.manager\nJOIN sports ON sports.id = teams.sport"
  }

  // remove
  collection.schema.removeField("uyyc9fzf")

  // remove
  collection.schema.removeField("zufu6plp")

  // remove
  collection.schema.removeField("pygxjuzf")

  // remove
  collection.schema.removeField("5wkmgjpz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lngg2aql",
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
    "id": "g60nqlrh",
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
    "id": "t80bad2f",
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
    "id": "vo481bh1",
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
    "id": "ar1ndrex",
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
    "id": "e89c7dcd",
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
    "query": "SELECT teams.id, teams.name, teams.logo, sports.name as sport_name,COUNT(teams.players) as player_nb\nFROM teams\nJOIN users ON users.id = teams.manager\nJOIN sports ON sports.id = teams.sport"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("lngg2aql")

  // remove
  collection.schema.removeField("g60nqlrh")

  // remove
  collection.schema.removeField("t80bad2f")

  // remove
  collection.schema.removeField("vo481bh1")

  // remove
  collection.schema.removeField("ar1ndrex")

  // remove
  collection.schema.removeField("e89c7dcd")

  return dao.saveCollection(collection)
})
