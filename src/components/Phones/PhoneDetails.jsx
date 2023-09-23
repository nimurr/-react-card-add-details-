import { useEffect, useState } from "react";
import Rating from "react-rating";
import {  useLoaderData, useParams } from "react-router-dom"



export default function PhoneDetails() {


    const DataAll = useLoaderData();
    const { id } = useParams();
    const [phone, setPhone] = useState({});
    useEffect(() => {
        const allData = DataAll.find(data => data.id == id);
        setPhone(allData)
    }, [id, DataAll])



    // local storage 
    const handleAddtoFavorite = () => {
        const addToFavorite = [];
        const localData = JSON.parse(localStorage.getItem('favorite'));

        if (!localData) {
            addToFavorite.push(phone)
            localStorage.setItem('favorite', JSON.stringify(addToFavorite))
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
        else {
            const isExites = localData.find(phn => phn.id == phone.id)
            if (!isExites) {
                addToFavorite.push(...localData, phone)
                localStorage.setItem('favorite', JSON.stringify(addToFavorite))
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Already Exetes',
                })
            }

        }

    }


    return (
        <div>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={phone.img}
                        alt="image"
                        className=" flex items-center w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h2>{phone.company}</h2>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {phone.title}
                    </h4>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {phone.salary}
                    </h4>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        
                        <Rating
                            initialRating={phone.rating}
                            readonly
                        />
                        
                    </h4>

                    <a className="inline-block" href="#">
                        <button onClick={handleAddtoFavorite} className="btn bg-blue-600 px-5 py-2 rounded text-white"> Add to Favorite</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
