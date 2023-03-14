import { useEffect, useState } from "react";
import MovieList from "./MovieList";


function Home() {

    const [netf, setNetf] = useState([])

    const Newa = async () => {
        const serverURL = "https://movies-library-production-c3da.up.railway.app/trending";
        const respo = await fetch(serverURL);
        const data = await respo.json()

        setNetf(data)

    }

    useEffect(() => {
        Newa();
    })


    return (
        <>

            <MovieList newArr={netf} />
        </>
    )

}

export default Home;