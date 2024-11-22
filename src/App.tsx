import {UserData} from "./components/UserData.tsx";

/**
 * All we need to do in App is render our component as usual
 */
export function App() {
  return (
      <main className={'p-8'}>
        <UserData/>
      </main>
  )
}
