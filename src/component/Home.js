import { useEffect, useState } from "react";
import MovieList from "./MovieList";


function Home() {

    const [netf, setNetf] = useState([]) // اذا تغيرت الستيت بيعمل ري ريندر للكوبوننت

    const Newa = async () => {
        const serverURL = "https://movies-library-production-c3da.up.railway.app/trending"; 
        const respo = await fetch(serverURL); // taken the data using fetch by the URL 
        const data = await respo.json() // fetch well change the data to json  

        setNetf(data) // store the data that became from the backend(server)

    }

    useEffect(() => {
        Newa();
    
    },[])


    return (
        <>

            <MovieList newArr={netf} /> 

            {/* we tooked the netf to send it &to use it as props (Home is the parent -- MovieList is the chiled  ) */}
        </>
    )

}

export default Home;