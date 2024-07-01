package hooks

import (
	"log"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

// UserRoleHook is a hook that add the default user role when creating a new user
func RegisterUserHooks(app *pocketbase.PocketBase) {
	app.OnRecordBeforeCreateRequest("users").Add(func(e *core.RecordCreateEvent) error {
		log.Println("Before create hook for users collection")

		// Add the default role to the user
		// Get the ID of the "user" role from the "roles" collection
		role, err := app.Dao().FindFirstRecordByData("roles", "name", "user")
		if err != nil {
			return err
		}
		// Add the role ID to the user's "role" field
		e.Record.Set("role", role.Id)
		return nil
	})
}
