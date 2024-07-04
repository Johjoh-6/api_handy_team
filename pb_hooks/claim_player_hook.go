package pb_hooks

import (
	"log"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

// PlayerUserHooks is a hook that add the role player when the user is link to a player
func PlayerUserHooks(app *pocketbase.PocketBase) {
	app.OnRecordBeforeUpdateRequest("players").Add(func(e *core.RecordUpdateEvent) error {
		log.Println("Before create hook for players collection")
		userLink := e.Record.Get("user_link")
		if userLink == "" {
			return nil
		}
		// Add the default role to the user
		e.Record.Set("claimed", true)

		// Get the ID of the "user" role from the "roles" collection
		role, err := app.Dao().FindFirstRecordByData("roles", "name", "player")
		if err != nil {
			return err
		}
		// Add the role ID to the user's "role" field
		user, err := app.Dao().FindFirstRecordByData("users", "id", userLink)
		if err != nil {
			return err
		}
		user.Set("role", role.Id)
		// sav user
		err = app.Dao().SaveRecord(user)

		return nil
	})
}
