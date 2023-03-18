

import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Favmovie from './Favmovie';



function FavList() {

  const [newData, setNewData] = useState([])

  
const newDATAfromDeleteReq = (arrData) =>{

  setNewData(arrData)
}






  const art = async () => {
    try {
      const dataWait = await axios.get('https://movies-library-production-c3da.up.railway.app/getMovies')
      //we took the data from server.js (from get data that inside tha DB)

      const axiosData = await dataWait.data;
      setNewData(axiosData)

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
          <Favmovie item={ee} key= {ee.id}  newFun= {newDATAfromDeleteReq}/>
        )
      })}

    </div >


  );
}
export default FavList