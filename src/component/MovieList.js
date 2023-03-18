import Movie from "./Movie"
import Row from 'react-bootstrap/Row';


function MovieList(props) {


    return (
        <>
            <Row xs={1} md={4} className="g-4">

                {props.newArr.map((item) => {
// here we bring the props name (newArr )that we tooked from Home component &  loop throw it to get the data of the single movie 

                    return <Movie a={item} />


                    
                      {/* we tooked the item (item is the all data that we tooked from the URL link that we have inside Home component )  to send it &to use it as props in Movi component (MOvieLIst is the parent -- Movie is the chiled  ) */}
                })}
            </Row>
        </>
    )

}

export default MovieList