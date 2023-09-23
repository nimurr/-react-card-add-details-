import { useEffect, useState } from "react"
import Favorite from "./Favorite"
export default function Favorites() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const loacl = JSON.parse(localStorage.getItem('favorite'));
    setData(loacl);
  }, [data])

  const handleAllClear = () => {
    localStorage.clear()
    setData([])
  }

  return (
    <div className="">
      <button className="btn" onClick={handleAllClear}> All data Clear</button>
      <div className="grid grid-cols-3 ">
        {
          data ? data.map(phn => <Favorite key={phn.id} phn={phn}></Favorite>) : <h2 className="col-span-3 text-xl text-center"> No data found !!</h2>
        }
      </div>
    </div>
  )
}
