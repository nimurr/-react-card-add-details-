import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Phones from "../../components/Phones/Phones";

 
export default function Home() {
    const phones = useLoaderData();
    console.log(phones) 
  return (
    <div>
       <Banner></Banner>
       <Phones phones={phones}></Phones>




    </div>
  )
}
