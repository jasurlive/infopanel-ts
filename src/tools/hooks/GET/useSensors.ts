import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

// live speed + temperature over socket.io. URLs come from .env
// usage: const { speed, temperature } = useSensors()
function useSocketValue(url: string, event: string) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const socket = io(url)
    socket.on(event, (data: { value: number }) => {
      const n = Number(data.value)
      if (!Number.isNaN(n)) setValue(n)
    })
    socket.on('connect_error', (err) => console.error(`[${event}]`, err.message))
    return () => {
      socket.disconnect()
    }
  }, [url, event])

  return value
}

export function useSensors() {
  return {
    speed: useSocketValue(import.meta.env.VITE_SPEED_URL, 'speed'),
    temperature: useSocketValue(import.meta.env.VITE_TEMPERATURE_URL, 'temperature'),
  }
}
