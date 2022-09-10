import './App.css';
import {useState , useEffect} from "react";
import axios from "axios"

function App() {

  const [coins, setCoins] = useState([])
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  const getCoins = async() => {
        const data  = await axios.get(url)
        const res = await setCoins(data.data)
        console.log(coins)
  }

  useEffect(() => {

    getCoins()
  } , [])

  return (
    <div className="App">
        
    </div>
  );
}

export default App;
