import {ReactNode, useEffect, useState} from "react";

interface Props<T> {
  loaderFunction(): Promise<T>
  render: (data: T) => ReactNode
  fallback?: ReactNode
}

/**
 * Using some generics, we can ensure anywhere that uses this component will be properly typed between the data we
 * expect to be loading and the data that will be passed back through the render function.
 * Also supports an optional loading state via the fallback prop
 */
export function DataLoader<T>({ loaderFunction, render, fallback }: Props<T>) {
  const [ data, setData ] = useState<T | undefined>(undefined)

  useEffect(() => {
    loaderFunction().then(setData)
  }, [loaderFunction])

  if (data === undefined) {
    return fallback ?? null
  }

  return render(data)
}
