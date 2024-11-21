import {loadUser} from "../lib/loadUser.ts";
import {DataLoader} from "./DataLoader.tsx";

/**
 * This is the usual component you'd render in your app.
 * The difference here is the included DataLoader that handles loading state and passing the loaded data back
 */
export function UserData() {
  return (
    <DataLoader
      loaderFunction={loadUser}
      fallback={<div>Loading...</div>}
      render={data => <pre>{JSON.stringify(data, undefined, 2)}</pre>}
    />
  )
}
