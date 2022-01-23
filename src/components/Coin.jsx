import React,{useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Tabs, Tab } from '@material-ui/core'
import { Line } from 'react-chartjs-2';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';

import { CircularProgress } from '@material-ui/core';
import Nav from './Nav';


const Coin = () => {

    const [coin, setCoin] = useState([]);
    const {id} = useParams();
    const [readMore , setReadMore] = useState(false);
    const [loading, setLoading] = useState(true);
    const [market, setMarket] = useState([]);
    const [daily, setDaily] = useState([]);
    const [monthly, setMonthly] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);

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

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    };
   

    useEffect(() => {
        fetchCoin()
        fetchMarket()
        fetchDaily()
        fetchMonthly()
        .then(

        )
        .catch((err) => {
            <errorPage />
        })
        .finally(() => {
            setLoading(false)
        })
    }, []);

    if(loading){
        return <div className="absolute top-1/2 left-1/2">
            
            <CircularProgress  />
            </div>
    }

    const {
        name,
        image = [],
        community_data =[],
        description = [],
        market_data =[],  
        links =[],
        /* put variables in empty objects*/
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

if(coin === undefined) {
    return(
        <div className="top-1/2 left-1/2">
            <CircularProgress />
        </div>
    )
}
    if(market_data.ath === undefined){
        return(
            <div className="absolute top-1/2 left-1/2">
                <CircularProgress />
            </div>
        )
    }else if(links.homepage === undefined){
        return(
            <div className="absolute top-1/2 left-1/2">
                <CircularProgress />
            </div>
        )
    }else if(market_data.circulating_supply === undefined){
            return(
                <div className="absolute top-1/2 left-1/2">
                   <CircularProgress />
                </div>
            )
    }else if(market_data.atl === undefined){
        return(
            <div className="absolute top-1/2 left-1/2">
                <CircularProgress />
            </div>
        )
    }else if(market_data.current_price === undefined){
        return(
            <div className="absolute top-1/2 left-1/2">
                <CircularProgress />
            </div>
        )
    } else if(market_data.market_cap === undefined){
        return(
            <div className="absolute top-1/2 left-1/2">
               <CircularProgress />
            </div>
        )
  
    }else if(newPrices === undefined){
        return(
            <div className="absolute top-1/2 left-1/2">
                <CircularProgress />
            </div>
        )
    }else 
    

    if(loading){
        return(
            <div className="absolute top-1/2 left-1/2">

                <CircularProgress />
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

//    const newLink = links.homepage[0];

   const atl = market_data.atl.eur;

   const current_price = market_data.current_price.eur;
    
   const market_cap = market_data.market_cap.eur;


    return (
        <div className="container mx-auto pt-12 h-full bg-white dark:bg-gray-800 dark:text-white .home-button:hidden">
            <Nav />
            
            <div className="pt-6 ">
                <p className="sm:uppercase sm:text-xl lg:hidden sm:text-center md:uppercase md: text-xl md: text-center" >{name}</p>
                <img src={image.large} alt="crypto" className="md:mr-auto md:ml-auto md:block sm:block sm:ml-auto sm:mr-auto sm:w-2/4 sm:pb-12 md:pb-4"/>
            </div>

            <div className='grid grid-cols-2 gap-2 sm:grid sm:grid-cols-1 sm:ml-2 sm:mr-2'>
            <div className=" border-solid border-4 border-black pt-4 pb-4">
                <p className="text-2xl font-black lg:pb-4 sm:text-center underline sm:pb-2 md: text-center md:pb-1 ">{name} Info</p>
                <div className="sm:text-center font-medium md:text-center ">
                {name} in circulation: {market_data.circulating_supply.toLocaleString()}
                </div>

                <div className="sm:text-center font-medium md:text-center">
                    <p> All Time High: €{ath.toLocaleString()}</p>
                    <p>All Time Low: €{atl.toLocaleString()}</p>
                </div>

                <div className="sm:text-center font-medium md:text-center" >
                    <p>Current Price: €{current_price.toLocaleString()}</p>
                    <p>Market Cap: €{market_cap.toLocaleString()}</p>
                </div>
            </div>

        <div className="border-solid border-4 border-black">
            <div className=" sm:text-center pb-4 ">
                <div className=" pt-4">
                    <p className="text-center text-2xl font-black md:pb-1 sm:pb-2 underline lg:relative -top-2">Socials</p>
                <p className="font-medium md:text-center">Twitter Followers: {community_data.twitter_followers.toLocaleString()}</p>
                <p className="lg:pb-2 font-medium md:text-center md:mb-2">Reddit Subscribers: {community_data.reddit_subscribers.toLocaleString()}</p>
                <div className='flex justify-center gap-4'>
                <button className="bg-white hover:bg-red-700  font-bold px-4 border border-black rounded  text-orange hover:text-white  "><RedditIcon className="pb-1"/><a href = {`${links.subreddit_url}`} target="_blank" rel="noreferrer" className=" hover:text-white">Reddit</a></button>
                <button className="bg-white hover:bg-red-700 hover:text-white text-blue-600 font-bold px-4 border border-black rounded "><TwitterIcon className="pb-1"/><a href = {`https://twitter.com/${links.twitter_screen_name}`} target="_blank" rel="noreferrer" className="  hover:text-white">Twitter</a></button>
                </div>
                
                </div>

            </div>
           
                <div className="sm:text-center">
             
             
           </div>

              
           
            </div>

            

            {/* <div className='grid grid-cols-2 place-items-end'>
                <div>   
                    <p>{name} Info</p>
                    <div>
                        {name} in circulation: {market_data.circulating_supply.toLocaleString()}
                    </div>
                    <div>
                        <p> All Time High: €{ath.toLocaleString()}</p>
                        <p> All Time Low: €{atl.toLocaleString()}</p>
                    </div>
                    <div>
                    <p>Current Price: €{current_price.toLocaleString()}</p>
                    <p>Market Cap: €{market_cap.toLocaleString()}</p>
                    </div>
                </div>
                <div>
                        <p>Socials</p>
                        <p>Twitter Followers: {community_data.twitter_followers.toLocaleString()}</p>
                        <p>Reddit Subscribers: {community_data.reddit_subscribers.toLocaleString()}</p>
                </div>
            </div> */}
           
           
           <div>
           </div>
          
           </div>
           <div className="md:mb-6 bg-gray-100 dark:bg-gray-400 dark:text-black">
               <p className="text-center lg:text-2xl lg:font-black lg:pb-4 md:font-black md:text-2xl md:pb-1 md:pt-6 underline">About</p>
               <div className ="text-xs font-medium md:ml-12 md:mr-12 sm:pl-4 sm:pr-4 md:text-base"dangerouslySetInnerHTML={{__html: readMore ? description.en: DOMPurify.sanitize(description.en.substring(0,400))}}></div>

               <button className="underline text-blue-600 md:pl-12 sm:pl-4 md:pb-8" onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : ' read more'}
                </button>
           </div>

           <div className="md:ml-8 md:mr-8">
           <Tabs value={selectedTab} onChange={handleChange} centered >
                  <Tab label ="Daily"/>
                  <Tab label ="Weekly" />
                  <Tab label = "Monthly"/>
              </Tabs>
              {selectedTab === 0 &&  <div>
                 <Line 
                   data={{
                    labels:hourlyTime,
                   
                    datasets:[
                        {
                            label:["Price"],
                            data:hourlyPrice ,
                           
                           borderColor: "green",
                            
                        }
                    ]
                }}
               
                height={200}
                width={400} 
                />
             </div>}
             {selectedTab === 1 && <div>
          <Line 
            data={{
                labels:weeklyTime,
               
                datasets:[
                    {
                        label:["Price"],
                        data:dailyPrice ,
                       
                       borderColor: "green",
                        
                    }
                ]
            }}
           
            height={200}
            width={400} 
            
             />
          </div>}

          {selectedTab === 2 &&   <div>
                 <Line 
                   data={{
                    labels:monthlyTime,
                   
                    datasets:[
                        {
                            label:["Price"],
                            data:monthlyPrice ,
                           
                           borderColor: "green",
                            
                        }
                    ]
                }}
               
                height={200}
                width={400} 
                />
             </div> }
             
           </div>

         
            
        </div>
    )
}

export default Coin

