import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const speedSocket = io("http://192.168.8.11:5500");
const temperatureSocket = io("http://0.0.0.0:5000");

export function useData() {
  const [temperature, setTemperature] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    console.log("[Speed Socket] Connecting...");
    console.log("[Temperature Socket] Connecting...");

    const handleSpeedConnect = () => {
      console.log("[Speed Socket] Connected:", speedSocket.id);
    };

    const handleTemperatureConnect = () => {
      console.log(
        "[Temperature Socket] Connected:",
        temperatureSocket.id
      );
    };

    const handleSpeedDisconnect = (reason: string) => {
      console.log("[Speed Socket] Disconnected:", reason);
    };

    const handleTemperatureDisconnect = (reason: string) => {
      console.log("[Temperature Socket] Disconnected:", reason);
    };

    const handleSpeedError = (error: Error) => {
      console.error("[Speed Socket] Connection error:", error);
    };

    const handleTemperatureError = (error: Error) => {
      console.error("[Temperature Socket] Connection error:", error);
    };

    const handleSpeed = (data: { value: number }) => {
      console.log("[Speed] Raw data:", data);

      const value = Number(data.value);

      console.log("[Speed] Parsed value:", value);

      if (!Number.isNaN(value)) {
        setSpeed(value);
      }
    };

    const handleTemperature = (data: { value: number }) => {
      console.log("[Temperature] Raw data:", data);

      const value = Number(data.value);

      console.log("[Temperature] Parsed value:", value);

      if (!Number.isNaN(value)) {
        setTemperature(value);
      }
    };

    speedSocket.on("connect", handleSpeedConnect);
    speedSocket.on("disconnect", handleSpeedDisconnect);
    speedSocket.on("connect_error", handleSpeedError);
    speedSocket.on("speed", handleSpeed);

    temperatureSocket.on("connect", handleTemperatureConnect);
    temperatureSocket.on("disconnect", handleTemperatureDisconnect);
    temperatureSocket.on("connect_error", handleTemperatureError);
    temperatureSocket.on("temperature", handleTemperature);

    return () => {
      speedSocket.off("connect", handleSpeedConnect);
      speedSocket.off("disconnect", handleSpeedDisconnect);
      speedSocket.off("connect_error", handleSpeedError);
      speedSocket.off("speed", handleSpeed);

      temperatureSocket.off("connect", handleTemperatureConnect);
      temperatureSocket.off("disconnect", handleTemperatureDisconnect);
      temperatureSocket.off("connect_error", handleTemperatureError);
      temperatureSocket.off("temperature", handleTemperature);
    };
  }, []);

  console.log("[useData] State:", {
    temperature,
    speed,
  });

  return {
    temperature,
    speed,
  };
}