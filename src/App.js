import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Coins from './components/Coins';
import Header from './components/Header';
import Coin from './components/Coin';
import Footer from './components/Footer';
import cryptoCurrencies from './components/cryptoCurrencies';





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
     
    

    const cryptoCurrencies = [
      { label :"Bitcoin", id:1},
      { label :"Ethereum", id:2 },
      { label :" Binance Coin", id:3 },
      { label : "Tether", id:4},
      { label : "Solana", id:5 },
      { label : "Cardano", id:6},
      { label : "XRP", id:7 },
      { label : "USD Coin", id:8},
      { label : "Polkadot", id:9},
      { label : "Dogecoin", id:10 },
      {label : "Avalanche"},
{label : "Terra"},
{label : "Shiba Inu"},
{label : "Crypto.com Coin"},
{label : "Wrapped Bitcoin"},
{label : "Polygon"},
{label : "Litecoin"},
{label : "Binance USD"},
{label :"Algorand"},
{label :"Chainlink"},
{label :"Bitcoin Cash"},
{label : "Uniswap"},
{label :"Dai"},
{label :"Axie Infinity"},
{label :" Stellar"},
{label :"VeChain"},
{label :"TerraUSD"},
{label :"Cosmos"},
{label :"Elrond"},
{label :" Internet Computer"},
{label : "cETH"},
{label :"OKB"},
{label :"Filecoin"},
{label :"TRON"},
{label :"FTX Token"},
{label :"Lido Staked Ether"},
{label :"Theta Network"},
{label :"Hedera"},
{label :"Ethereum Classic"},
{label :"Decentraland"},
{label :"The Sandbox"},
{label :"Fantom"},
{label :"cDAI"},
{label :"Near"},
{label :"Gala",},
{label :"Tezos",},
{label :"The Graph",},
{label :"Monero",},
{label :"Olympus",},
{label :"Klaytn",},
{label :"Helium",},
{label :"EOS",},
{label :"Radix",},
{label :"IOTA",},
{label :"cUSDC",},
{label :"Flow",},
{label :"Magic Internet Money"},
{label :"Kusama",},
{label :"LEO Token",},
{label :"Aave",},
{label :"Loopring",},
{label :"PancakeSwap",},
{label :"THORChain",},
{label :"Enjin Coin",},
{label :"eCash",},
{label :"Stacks",},
{label :"Arweave",},
{label :"Amp",},
{label :"Kadena",},
{label :"Harmony",},
{label :"Bitcoin SV",},
{label :"Maker",},
{label :"Quant",},
{label :"Zcash",},
{label :"NEO",},
{label :"Chiliz",},
{label :"Huobi BTC",},
{label :"Waves",},
{label :"Basic Attention Token"},
{label :"Holo",},
{label :"BitTorrent",},
{label : "KuCoin Token",},
{label : "Bitcoin Cash ABC",},
{label :"Theta Fuel",},
{label :"Curve DAO Token",},
{label :"Dash",},
{label :"Celo",},
{label :"Wonderland",},
{label :"Celsius Network",},
{label :"LINK",},
{label :"Compound",},
{label :"e-Radix",},
{label :"Qtum",},
{label :"NEM",},
{label :"NEXO",},
{label :"Marinade staked SOL"},
{label :"Huobi Token"},
{label :"ECOMI",},
{label :"Sushi",}

    ]

    const singleCrypto = []

    for(let i =0; i < cryptoCurrencies.length; i += 1) {
      singleCrypto.push(cryptoCurrencies[i].label)
    }
 

  return (
    <div className="container mx-auto sm:bg-gradient-to-r from-green-400  to-blue-500 sm:pr-6 sm:pl-6 ">
      <Router>
        
        <Route exact path="/" >
            <div >
              <h1 className="text-center pt-6"> Search for a currency</h1>
              <form className="flex flex-col justify-center items-center">
                <input type="text" placeholder="search" className="md:w-1/4 sm:w-1/2 sm:pt-2 sm:pb-2 bg-blue-50"  onChange={handleChange}  />
               
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
