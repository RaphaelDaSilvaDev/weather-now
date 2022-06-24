const KEY = "42bb4e1532294664a0a235706221806"

export interface IApiResponse {
    location: {
        name: string,
        region: string,
        country: string,
        localtime: Date
    },
    current: {
        temp_c: number,
        is_day: number,
        condition: {
            text: string
        },
        wind_kph: number,
        humidity: number
    },
    error: {
        code: number,
        message: string
    }
}

export async function fetchData(city: string): Promise<IApiResponse> {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&lang=pt&q=${city}&aqi=yes`
    const fetchResponse = await fetch(url)
    const data: IApiResponse = await fetchResponse.json()
    return data
}