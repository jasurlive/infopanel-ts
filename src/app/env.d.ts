interface ImportMetaEnv {
  readonly VITE_SPEED_URL: string
  readonly VITE_TEMPERATURE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
