import Phone from "./Phone";

 
export default function Phones({phones}) {

  return (
    <div>
        <h2 className="my-5 text-center text-2xl">All category Phone</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }
        </div>
    </div>
  )
}
