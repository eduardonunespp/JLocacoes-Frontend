import { Cache } from '../adapters/';
type ApiConfig = Partial<{
  baseUrl: string
  headers: Record<string, string | number | boolean>
}>

type SetupApiConfig = (overrides?: ApiConfig) => ApiConfig
 
export const setupCassinoApiConfig: SetupApiConfig = () => {
  const accessToken = Cache.get({ key: 'accessToken' })

  return {
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
}