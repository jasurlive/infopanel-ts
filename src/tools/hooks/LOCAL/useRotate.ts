import { useEffect, useState } from 'react'

// cycles 0..count-1 every `seconds`
export function useRotate(count: number, seconds: number) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), seconds * 1000)
    return () => clearInterval(t)
  }, [count, seconds])

  return index
}
