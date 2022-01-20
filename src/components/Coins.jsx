import React from 'react'
import { Link } from 'react-router-dom'



export const Coins = ({ id,name, image, symbol, price, volume, priceChange, marketCap, rank}) => {

console.log(name)
   

    return (
        <div className="container mx-auto mt-2 bg-white md:w-3/4 sm:mb-4 border-b-2 border-black">


            
            <div className="2xl:ml-96 2xl:mr-96 md:ml-20 md:mr-20 lg:ml-36 lg:mr-36 xl:ml-80 xl:mr-80  ">
                <div className=" sm:flex sm:flex-col sm:items-center justify-center md:flex md:flex-row sm:border-b-2 sm:border-solid sm:border-4 sm:border-black xl:pb-10 md:items-center sm:pt-4 ">
                    
                    {/* <p className="sm:pr-48 sm:relative sm:top-8 sm:text-xl md:relative md:right-6 xl:relative xl:right-64 ">{rank}</p> */}
                    

                    <img src={image} alt={name} className="w-20 h-20 xl:relative xl:right-40 object-cover md:mt-8"  />
                    <Link to={`/coins/${id}`} key={name} style={{ textDecoration: 'none'}}>

                    <p className="md:w-20 md:pl-6 text-blue-600 underline sm:pb-2 xl:relative xl:right-24 xl:w-40 text-justify xl:pt-6">{name}</p>
                    </Link>
                    <p className="md:w-20 md:pl-6  hidden ">{symbol}</p>
                   <span className="md:hidden"> Price per coin: </span> <span className="flex justify-start md:w-20 md:pl-12  sm:pb-2 xl:relative xl:right-24 xl:pt-6">€{price.toLocaleString()}</span>
                    <span className="md:hidden"> Current Volume:</span><p className="flex justify-start md:w-40 md:pl-12 sm:pb-2 xl:relative xl:right-12 xl:pt-6">€{volume.toLocaleString()}</p>
                   <span className="md:hidden"> Price Change: </span>{priceChange < 0 ? (
                        <p className="flex justify-start text-red-500 md:w-20 md:pl-12 sm:pb-2  xl:relative xl:right-8 xl:pt-6">{priceChange.toFixed(2)}%</p>
                    ): (
                        <p className="flex justify-start text-green-500 md:w-20 md:pl-12  sm:pb-2 xl:relative xl:right-8 xl:pt-6">{priceChange.toFixed(2)}%</p>
                    )
                    }
                   <span className="md:hidden"> Market Cap: </span><p className="flex justify-start md:w-40 md:pl-12 xl:relative xl:left-4 sm:pb-4 xl:pt-6">
                        €{marketCap.toLocaleString()}
                    </p>
                </div>
               
            </div>
            
            
            
        </div>
        
    )
}

export default Coins
