import { MagnifyingGlass, MapPin } from "phosphor-react"
import { useState } from "react"
import { format } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR"
import { fetchData, IApiResponse } from "./services/api"
import { Weather } from "./components/Weather"

function App() {
  const [city, setCity] = useState('')
  const [data, setData] = useState<IApiResponse>()

  let dataFormated
  if (data?.location) {
    const date = new Date(data.location.localtime)
    dataFormated = format(date, "d' de 'MMMM H':'mm", {
      locale: ptBR
    })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    fetchData(city).then((response) => {
      document.body.classList.remove('sunny', 'rain-possible', 'partly-cloud', 'thunder-rain', 'rain')
      setData(response)
    })
  }

  return (
    <div className="py-16 h-screen max-h-[1024px] flex flex-col justify-between items-center" >
      <form className="w-fit flex justify-center items-center border border-gray-600 rounded-lg"
        onSubmit={handleSubmit}
      >
        <MapPin size={24} weight="fill" className="ml-2" />
        <input
          className="bg-transparent font-medium border-none outline-none ml-2 hover:bg-transparent active:bg-transparent w-40"
          type="text"
          name="search"
          id="search"
          placeholder="City" autoComplete="off"
          onChange={({ target: { value } }) => setCity(value)}
        />

        <button className="w-16 p-1 flex justify-center items-center bg-gray-600 border border-gray-600 rounded hover:bg-gray-400 hover:border-gray-400">
          <MagnifyingGlass size={20} color="#eee" />
        </button>
      </form>
      <Weather data={data} formatedDate={dataFormated} />
    </div >
  )
}

export default App
