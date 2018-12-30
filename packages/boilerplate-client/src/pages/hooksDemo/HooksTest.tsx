import { useState, useEffect, useRef, useMemo } from 'react'
import * as React from 'react'
// import { useComputedValue } from './useComputedValue'

// set timeout not working - see https://github.com/facebook/react/issues/14010

export function HooksTest() {
  // Declare a new state variable, which we'll call "count"
  const [clickCount, setClickCount] = useState(0)
  const [timer, setTimer] = useState(0)

  const countRef = useRef(timer)
  countRef.current = timer

  const startTimer = () => {
    return setInterval(() => {
      setTimer(countRef.current + 1)
    }, 3000)
  }

  useEffect(() => {
    const intervalId = startTimer()
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const computedValue = useMemo(
    () => {
      return timer * 2
    },
    [timer]
  )

  const computedValueFromClick = useMemo(
    () => {
      return clickCount * 2
    },
    [clickCount]
  )

  return (
    <div>
      <p>You clicked {clickCount} times</p>
      <button onClick={() => setClickCount(clickCount + 1)}>Click me</button>
      <p>Your timer is at {timer}</p>
      <p>Your timer computed value is {computedValue}</p>
      <p>Your click computed value is {computedValueFromClick}</p>
    </div>
  )
}
