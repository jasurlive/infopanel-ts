import { useEffect, useState } from 'react'

const now = () => new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })

export function useClock() {
  const [time, setTime] = useState(now)

  useEffect(() => {
    const t = setInterval(() => setTime(now()), 1000)
    return () => clearInterval(t)
  }, [])

  return time
}
