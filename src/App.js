import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Coins from './components/Coins';

import Coin from './components/Coin';
import Footer from './components/Footer';






function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
 

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
   .then(res =>{
     setCoins(res.data);
     console.log(res.data);
   }).catch(error => console.log(error));
  }, []);

  console.log(coins,'blue')

  const handleChange = e => {
    setSearch(e.target.value)
  };




  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    );
     
    

    


    
 

  return (
    <div className="container mx-auto sm:bg-gradient-to-r from-green-400  to-blue-500 sm:pr-6 sm:pl-6 sm:pt-12  ">
      <Router>
        
        <Route exact path="/" >
            <div >
              <h1 className="text-center pt-6"> Search for a currency</h1>
              <form className="flex flex-col justify-center items-center">
                <input type="search" placeholder="search" className="md:w-1/4 sm:w-1/2 sm:pt-2 sm:pb-2 bg-blue-50"  onChange={handleChange}  />
                
              </form>

              

              

            </div>
         
            {filteredCoins.map(coin => {
        console.log(coin)
          return(
            <Coins
            id={coin.id} 
            name={coin.name}
            image={coin.image} 
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            rank={coin.market_cap_rank}
            />
          )
        })}
        </Route>
           <Route path="/coins/:id" children={<Coin />}>

           </Route>
           <Footer />
         
       </Router>

    </div>
  );
}

export default App;
