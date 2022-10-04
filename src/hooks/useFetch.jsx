import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'

const useFetch = (parametre) => {

    const [coin, setCoin] = useState({});
    const url = `https://api.coingecko.com/api/v3/coins/${parametre}`;
    console.log(coin);

    useEffect(() => {
        axios
          .get(url)
          .then((res) => {
            setCoin(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      return [coin , setCoin]
    
 
}

export default useFetch