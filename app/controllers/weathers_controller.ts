import type { HttpContext } from '@adonisjs/core/http'
export default class WeathersController {
  /**
   * kalau di vue.js itu  namanya promise, di adonis itu async-await
   * ini handler untuk /weather
   */
  public async renderPage({ view }: HttpContext) {
    return view.render('pages/weather')
  }

  /**
   * ini handler untuk /api/weather
   */
  public async getApiData({ response }: HttpContext) {
    const API_URL = new URL(
      'https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m'
    )

    try {
      interface WeatherApiResponse {
        hourly: {
          time: string[]
          temperature_2m: number[]
        }
      }
      const apiResponse: Response = await fetch(API_URL)

      if (!apiResponse.ok) {
        return response.status(500).json({ error: 'Gagal mengambil data external' })
      }

      const data: any = await apiResponse.json()

      //ngeproses data
      const processedData = data.hourly.time.map((time: string, index: number) => {
        return {
          time: time,
          temperature: data.hourly.temperature_2m[index],
        }
      })

      return response.json(processedData)
    } catch (error) {
      console.error("Error data can't be fetching:", error)
      return response.status(500).json({ error: 'Terjadi kesalahan data external' })
    }
  }
}
