import {demoData} from "../lib/demoData.ts";
import {loadUser} from "../lib/todos/loadUser.ts";
import {DataLoader} from "./DataLoader.tsx";

export function UserData() {
  return (
    <DataLoader
      loaderFunction={loadUser}
      render={data => <UserDataInner data={data}/>}
    />
  )
}

function UserDataInner({ data }: { data: typeof demoData }) {
  return (
    <pre>{JSON.stringify(data, undefined, 2)}</pre>
  )
}