import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {UserData} from "./components/UserData.tsx";

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={'p-8'}>
        <UserData/>
      </main>
    </QueryClientProvider>
  )
}
