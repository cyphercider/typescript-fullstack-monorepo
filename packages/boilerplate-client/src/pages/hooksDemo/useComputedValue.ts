// https://reactjs.org/docs/hooks-faq.html
import { useMemo } from 'react'

export function useComputedValue(fn: () => any, watchedValue: any[]) {
  return useMemo(fn, watchedValue)
}

// export const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
