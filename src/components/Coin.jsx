import React,{useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Tabs, Tab } from '@material-ui/core'


const Coin = () => {

    const [coin, setCoin] = useState([]);
    const {id} = useParams();
    const [readMore , setReadMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [market, setMarket] = useState([]);
    const [daily, setDaily] = useState([]);
    const [monthly, setMonthly] = useState([]);

    const url =`https://api.coingecko.com/api/v3/coins/${id}`;
    const url2 =`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=6&interval=daily`
    const url3 =`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=1&interval=hourly`
    const url4 =`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=29&interval=daily`

    const fetchCoin = async () => {
        try{
            
            const response = await fetch(url);
            const coin = await response.json();

            setCoin(coin)
            
        }catch(error){


        }
    }

    const fetchMarket = async () => {
        try{

            const res = await fetch(url2);
        
            const market = await res.json();
          
            setMarket(market);
            
        }catch(error){

        }
    }

    const fetchDaily = async () => {
        try{
            const res2 = await fetch(url3);
            const daily = await res2.json();

            setDaily(daily)

        }catch(error){
        }

    }

    const fetchMonthly = async () => {
        try{
            const res3 = await fetch(url4);
            const monthly = await res3.json()

            setMonthly(monthly)
        }catch(error){

        }
    }

   

    useEffect(() => {
        setLoading(true)
        fetchCoin()
        fetchMarket()
        fetchDaily()
        fetchMonthly()
        .then(

        )
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, []);

    if(loading){
        return 'loading...'
    }

    const {
        name,
        image = [],
        community_data =[],
        description = [],
        market_data =[],  
        links =[],
    } = coin

    const formatData = (prices) => {
        return prices.map((el) => {
            return {
                t: el[0],
                y: el[1].toFixed(2),
            }
        })
    }
    const {
        prices =[],
    } = market;

    const {
        
    } = daily

    const {

    } = monthly


    const newPrices = formatData(prices)
    const weeklyTime =[];
    const dailyPrice = [];

    for(let i=0; i< newPrices.length; i += 1) {
        weeklyTime.push(new Date(newPrices[i].t).toLocaleString().slice(0, 10));
        dailyPrice.push(newPrices[i].y)
    }


    const hourlyTime = [];
  const hourlyPrice = [];

   for(let i=0; i< daily.prices; i += 1 ) {
       hourlyTime.push(new Date(daily.prices[i][0]).toLocaleString());
       hourlyPrice.push(daily.prices[i][1].toFixed(2));
   }

console.log(hourlyTime, "gtdthystdrgjy")
console.log(hourlyPrice, "fgrhtr")
  
const monthlyTime=[];
const monthlyPrice = [];


    if(market_data.ath === undefined){
        return(
            <div>
                loading
            </div>
        )
    }else if(links.homepage === undefined){
        return(
            <div>
                loading
            </div>
        )
    }else if(market_data.circulating_supply === undefined){
            return(
                <div>
                    loading
                </div>
            )
    }else if(market_data.atl === undefined){
        return(
            <div>
                loading
            </div>
        )
    }else if(market_data.current_price === undefined){
        return(
            <div>
                loading
            </div>
        )
    } else if(market_data.market_cap === undefined){
        return(
            <div>
                loading
            </div>
        )
  
    }else if(newPrices === undefined){
        return(
            <div>
                loading
            </div>
        )
    }else if(daily.prices === undefined) {
        <div>
            loading
        </div>
    }else if(monthly.prices === undefined) {
            <div>
                loading
            </div>
    }
    

    if(loading){
        return(
            <div>
                loading...
            </div>
        )
    }

    const newDaily = daily.prices;
    const thirtydays = monthly.prices

    for(let i=0; i<newDaily.length; i += 1) {
        hourlyTime.push(new Date(newDaily[i][0]).toLocaleTimeString());
        hourlyPrice.push(newDaily[i][1])
    }
   
    console.log(hourlyPrice,hourlyTime,"weeklyTime")

    for(let i=0; i< thirtydays.length; i += 1 ){
        monthlyTime.push(new Date(thirtydays[i][0]).toLocaleString().slice(0, 10));
        monthlyPrice.push(thirtydays[i][1])
    }

    
   const ath = market_data.ath.eur;

   const newLink = links.homepage[0];

   const atl = market_data.atl.eur;

   const current_price = market_data.current_price.eur;
    
   const market_cap = market_data.market_cap.eur;


    return (
        <div className="container mx-auto pt-8">
            <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Home</button>
            </Link>
            <div className="pt-6">
                <p className="sm:text-center sm:text-xl sm:pr-6 lg:hidden" >{name}</p>
                <img src={image.large} alt="" className="sm:pl-28"/>
            </div>

            <div className=" lg:absolute top-32 left-2/3">
                <div className="sm:text-center bg-blue-900 rounded-lg">
                    <p className="sm:hidden text-center text-2xl font-black pb-4">Socials</p>
                <p>Twitter Followers: {community_data.twitter_followers.toLocaleString()}</p>
                <p>Reddit Subscribers: {community_data.reddit_subscribers.toLocaleString()}</p>
                <a href = {`${links.subreddit_url}`} target="_blank" rel="noreferrer" className="lg:pl-20 text-blue-600 hover:text-red-600">Reddit</a> <br />
                <a href = {`https://twitter.com/${links.twitter_screen_name}`} target="_blank" rel="noreferrer" className="lg:pl-20 text-blue-600 hover:text-red-600">Twitter</a>
                </div>
                <div className="sm:text-center">
             
             
           </div>

              
           <div className="sm:text-center">
                 
           </div >
            </div>

            <div className="lg:absolute top-32 left-1/3 lg:pl-28 bg-blue-900 rounded-lg">
                <p className="sm:hidden lg:text-2xl lg:font-black lg:pb-4 ">{name} Info</p>
                <div className="sm:text-center">
                {name} in circulation:{market_data.circulating_supply.toLocaleString()}
                </div>

                <div className="sm:text-center">
                    <p> All Time High: €{ath.toLocaleString()}</p>
                    <p>All Time Low: €{atl.toLocaleString()}</p>
                </div>

                <div className="sm:text-center" >
                    <p>Current Price: €{current_price.toLocaleString()}</p>
                    <p>Market Cap: €{market_cap.toLocaleString()}</p>
                </div>
            </div>
           
           <div className="lg:absolute bottom-96">
               <p className="text-center lg:text-2xl lg:font-black lg:pb-4">About</p>
               <div dangerouslySetInnerHTML={{__html: readMore ? description.en: DOMPurify.sanitize(description.en.substring(0,400))}}></div>

               <button className="underline text-blue-600" onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : ' read more'}
                </button>
           </div>
           <div>
           
             
           </div>

            
        </div>
    )
}

export default Coin
