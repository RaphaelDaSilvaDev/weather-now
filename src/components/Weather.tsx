import { Drop, Wind } from "phosphor-react";
import { Cloudy } from "./Icons/Cloudy";
import { LightRain } from "./Icons/LightRain";
import { PartlyCloud } from "./Icons/day/PartlyCloud";
import { RainPossible } from "./Icons/RainPossible";
import { Sunny } from "./Icons/day/Sunny";
import { ThunderRain } from "./Icons/ThunderRain";
import { MoonCloudy } from "./Icons/nigth/MoonCloudy";
import { Moonny } from "./Icons/nigth/Moonny";
import { IApiResponse } from "../services/api";


export function Weather({ data, formatedDate }: { data: IApiResponse | undefined, formatedDate?: string }) {
    let condition

    if (data) {
        if (data.location) {
            data.current.is_day === 0 ? document.body.classList.add('night') : document.body.classList.remove('night')
        } else {
            document.body.classList.remove('night')
        }

        if (data.current) {
            if (data.current.condition.text === "Céu limpo" || data.current.condition.text === "Sol") {
                if (data.current.is_day === 1) {
                    condition = <Sunny />
                    document.body.classList.add('sunny')
                } else {
                    condition = <Moonny />
                    document.body.classList.add('sunny')
                }

            }

            if (data.current.condition.text === "Possibilidade de chuva irregular" || data.current.condition.text === 'Encoberto') {
                condition = <RainPossible />
                document.body.classList.add('rain-possible')
            }

            if (data.current.condition.text === "Parcialmente nublado") {
                if (data.current.is_day === 1) {
                    condition = <PartlyCloud />
                    document.body.classList.add('partly-cloud')
                } else {
                    condition = <MoonCloudy />
                    document.body.classList.add('partly-cloud')
                }
            }

            if (data.current.condition.text === "Chuva fraca" || data.current.condition.text === "Aguaceiros fracos") {
                condition = <LightRain />
                document.body.classList.add('rain')
            }

            if (data.current.condition.text === "Nublado") {
                condition = <Cloudy />
                document.body.classList.add('rain')
            }

            if (data.current.condition.text === "Chuva moderada ou forte com trovoada") {
                condition = <ThunderRain />
                document.body.classList.add('thunder-rain')
            }
        }
    }

    return (
        <>
            {data?.location
                ?
                <>
                    <div className="flex flex-col justify-center items-center">
                        <span>{data.location.region}, {data.location.country}</span>
                        <span>{formatedDate}</span>
                    </div>

                    <div className="flex flex-col justify-between items-center gap-7">
                        {condition}
                        <span className="text-2xl">{data.current.condition.text}</span>
                        <strong className="font-reem text-8xl">{data.current.temp_c.toFixed(0)}°C</strong>
                    </div>

                    <div className="flex gap-16">
                        <div className="flex flex-col justify-center items-center">
                            <Wind size={24} />
                            <span className="text-2xl">{data.current.wind_kph} km/h</span>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <Drop size={24} weight="fill" />
                            <span className="text-2xl">{data.current.humidity} %</span>
                        </div>
                    </div>
                </>
                :
                <div className="h-1/2">
                    {data?.error ? <h1>Procure uma Cidade que Exista!</h1> : <h1>Pesquise uma Cidade</h1>}
                </div>
            }
        </>
    )
}