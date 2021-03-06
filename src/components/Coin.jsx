import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Tabs, Tab } from '@material-ui/core'
import { Line } from 'react-chartjs-2';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';

import { CircularProgress } from '@material-ui/core';
import Nav from './Nav';
import MobileNav from './MobileNav';


const Coin = () => {

    const [coin, setCoin] = useState([]);
    const {id} = useParams();
    const [readMore , setReadMore] = useState(false);
   
    const [market, setMarket] = useState([]);
    const [daily, setDaily] = useState([]);
    const [monthly, setMonthly] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [loading, setLoading] = useState(true);

    
   
   

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setCoin(data)
            setLoading(false)
        })
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=6&interval=daily`)
        .then((response2) => response2.json())
        .then((dailyData) => {
            setMarket(dailyData)
            
        })
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=1&interval=hourly`)
        .then((response3) => response3.json())
        .then((hourlyData) => {
            setDaily(hourlyData)
            
        })
        fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=29&interval=daily`)
        .then((response4) => response4.json())
        .then((monthlyData) => {
            setMonthly(monthlyData)
          
        })
        
    }, [id]);

    if(loading) return <h1>Loading...</h1>


    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    };
    
    

   
    

    const {
        name,
        image,
        community_data,
        description,
        market_data,  
        links,
    } = coin
    console.log(coin)

    const {
        prices =[],
    } = market
    console.log(market)

    const formatData = (prices) => {
        return prices.map((el) => {
            return {
                t: el[0],
                y: el[1].toFixed(2),
            }
        })
    }

    
  


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

  
const monthlyTime=[];
const monthlyPrice = [];


  
 if(newPrices === undefined){
        return(
            <div className="absolute top-1/2 left-1/2">
                <CircularProgress />
            </div>
        )
    }else if(daily.prices === undefined){
        return(
            <div className="absolute top-1/2 left-1/2">
                <CircularProgress />
            </div>
        )
    } else if(monthly.prices === undefined){
        return(
            <div className="absolute top-1/2 left-1/2">
                <CircularProgress />
            </div>
        )
    } 
    

    for(let i=0; i<daily.prices.length; i += 1) {
        hourlyTime.push(new Date(daily.prices[i][0]).toLocaleTimeString());
        hourlyPrice.push(daily.prices[i][1])
    }

    for(let i=0; i< monthly.prices.length; i += 1 ){
        monthlyTime.push(new Date(monthly.prices[i][0]).toLocaleString().slice(0, 10));
        monthlyPrice.push(monthly.prices[i][1])
    }

    
   const ath = market_data.ath.eur;

   const atl = market_data.atl.eur;

   const current_price = market_data.current_price.eur;
    
   const market_cap = market_data.market_cap.eur;
   


    return (
        <div key={id} className="container mx-auto pt-12 h-full bg-white dark:bg-gray-800 dark:text-white">
            <Nav /><MobileNav />
            
            <div className="pt-6 ">
                <p className="sm:uppercase sm:text-xl lg:hidden sm:text-center md:uppercase md: text-xl md: text-center" >{name}</p>
                <img src={image.large} alt="crypto" className="md:mr-auto md:ml-auto md:block sm:block sm:ml-auto sm:mr-auto sm:w-2/4 sm:pb-12 md:pb-4"/>
            </div>

            <div className='grid grid-cols-2 gap-2 sm:grid sm:grid-cols-1 sm:ml-2 sm:mr-2 md:ml-2 md:mr-2'>
            <div className=" border-solid border-4 border-black pt-4 pb-4">
                <p className="text-2xl font-black lg:pb-4 sm:text-center underline sm:pb-2 md: text-center md:pb-1 ">{name} Info</p>
                <div className="sm:text-center font-medium md:text-center ">
                {name} in circulation: {market_data.circulating_supply.toLocaleString()}
                </div>

                <div className="sm:text-center font-medium md:text-center">
                    <p> All Time High: ???{ath.toLocaleString()}</p>
                    <p>All Time Low: ???{atl.toLocaleString()}</p>
                </div>

                <div className="sm:text-center font-medium md:text-center" >
                    <p>Current Price: ???{current_price.toLocaleString()}</p>
                    <p>Market Cap: ???{market_cap.toLocaleString()}</p>
                </div>
            </div>

        <div className="border-solid border-4 border-black">
            <div className=" sm:text-center pb-4 ">
                <div className=" pt-4">
                    <p className="text-center text-2xl font-black md:pb-1 sm:pb-2 underline lg:relative -top-2">Socials</p>
                <p className="font-medium md:text-center">Twitter Followers: {community_data.twitter_followers.toLocaleString()}</p>
                <p className="lg:pb-2 font-medium md:text-center md:mb-2">Reddit Subscribers: {community_data.reddit_subscribers.toLocaleString()}</p>
                <div className='flex justify-center gap-4'>
                    {(community_data.reddit_subscribers === 0) ? <div className='hidden'></div> : <button className="bg-white hover:bg-red-700  font-bold px-4 border border-black rounded  text-orange hover:text-white  "><RedditIcon className="pb-1"/><a href = {`${links.subreddit_url}`} target="_blank" rel="noreferrer" className=" hover:text-white">Reddit</a></button>}
            
                    {(community_data.twitter_followers === 0) ? <div className='hidden'></div> : <button className="bg-white hover:bg-red-700 hover:text-white text-blue-600 font-bold px-4 border border-black rounded "><TwitterIcon className="pb-1"/><a href = {`https://twitter.com/${links.twitter_screen_name}`} target="_blank" rel="noreferrer" className="  hover:text-white">Twitter</a></button>}
                
                </div>
                
                </div>

            </div>
           
                

              
           
            </div>

           <div>
           </div>
          
           </div>
            

           <div className="md:mb-6 bg-gray-100 dark:bg-gray-600 dark:text-white md:mr-2 md:ml-2">
               {(description.en.length === 0) ? <div className='hidden'> Empty Text</div> : <div><p className="text-center lg:text-2xl lg:font-black lg:pb-4 md:font-black md:text-2xl md:pb-1 md:pt-6 underline">About</p>
               <div className ="text-xs font-medium md:ml-12 md:mr-12 sm:pl-4 sm:pr-4 md:text-base"dangerouslySetInnerHTML={{__html: readMore ? description.en: DOMPurify.sanitize(description.en.substring(0,400))}}></div>
               {(description.en.length <= 400) ? <button className='hidden'></button> : <button className="underline text-blue-600 md:pl-12 sm:pl-4 md:pb-8" onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : ' read more'}
                </button>}
               </div>
               }
               
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

