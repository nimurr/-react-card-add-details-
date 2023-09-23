import Rating from "react-rating"

 
export default function Favorite({phn}) {
    // console.log(phn)
  return (
    <div>
         <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={phn.img}
                        className="h-auto w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {phn.title}
                        </p>
                        <Rating
                            initialRating={phn.rating}
                            readonly
                        />
                        {/* <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            
                            {phone.rating}
                        </p> */}
                    </div>
                </div>
                <div className="p-6 pt-0">
                    
                        <button
                            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Details
                        </button>
                </div>
            </div>
    </div>
  )
}
