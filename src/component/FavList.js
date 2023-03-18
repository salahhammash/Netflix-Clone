

import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Favmovie from './Favmovie';


// parent 



function FavList() {

  const [newData, setNewData] = useState([])


  const newDATAfromDeleteReq = (arrData) => {
    // pass this function to chiled to un-refresh the page when do delete 

    setNewData(arrData)
  }


  const art = async () => {
    try {
      const dataWait = await axios.get(`${process.env.REACT_APP_URLSERVER}/getMovies`)
      //we took the data from server.js (from get data that inside tha DB)

      const axiosData = await dataWait.data;
      setNewData(axiosData)
      // we used the setNewData(axiosData) to store the data that we retrived from ( get ) 

    }
    catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    art();
  }, [])

  
  return (
    <div>
      {newData.map((ee) => {
        return (
          <Favmovie item={ee} key={ee.id} newFun={newDATAfromDeleteReq} />
        )
        // we passd the key to unshow the errors inside the console ,
      })}

    </div >


  );
}
export default FavList