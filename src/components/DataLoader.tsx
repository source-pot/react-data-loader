import {useQuery} from "@tanstack/react-query";
import {ReactNode} from "react";

interface Props<T> {
  loaderFunction(): Promise<T>
  render: (data: T) => ReactNode
}

export function DataLoader<T>({ loaderFunction, render }: Props<T>) {
  const { data, isPending } = useQuery<T>({
      queryKey: ['todos'],
      queryFn: loaderFunction
    }
  )

  if (isPending || data === undefined) {
    return <p>Loading...</p>
  }

  return render(data)
}
