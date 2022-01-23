import React from 'react'
import { Link } from 'react-router-dom'




export const Coins = ({ id,name, image, symbol, price, volume, priceChange, marketCap, rank}) => {

console.log(name)
   

    return (
        <div className="container mx-auto mt-2 bg-white md:w-3/4 sm:mb-4 border-b-2 border-black dark:bg-gray-800 dark:text-white dark:border-white">


            
            {/* <div className="  md:flex md:justify-center 2xl:pl-20 lg:pl-20 md:pr-20">
                <div className=" sm:flex sm:flex-col sm:items-center  md:flex md:flex-row sm:border-b-2 sm:border-solid sm:border-4 sm:border-black xl:pb-10 md:items-center sm:pt-4 ">
                    
                   
                    

                    <img src={image} alt={name} className="lg:w-20 lg:h-20 xl:relative xl:right-40 object-cover md:mt-8 md:w-10 md:h-10 md:mb-6 lg:mb-0"  />
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
             */}

             <Link to={`/coins/${id}`} key={name} style={{ textDecoration: 'none'}}>
             <div className='lg:grid lg:grid-cols-6 lg:items-center sm:flex sm:flex-col sm:items-center sm:border-b-2 sm:border-solid sm:border-4 sm:border-black sm:py-4 '>
                 <img src={image} alt={name} className='w-20 h-20'/>
                 <span className='font-bold'>{name}</span>
                 <span className="lg:hidden"> Price per coin: </span><p>€{price.toLocaleString()}</p>
                 <span className="lg:hidden"> Current Volume:</span> <p>€{volume.toLocaleString()}</p>
                 <span className="lg:hidden"> Price Change: </span> {priceChange < 0 ? (
                        <p className='text-red-500'>{priceChange.toFixed(2)}%</p>
                    ): (
                        <p className='text-green-500'>{priceChange.toFixed(2)}%</p>
                    )
                    }
                    <span className="lg:hidden"> Market Cap: </span><p>{marketCap.toLocaleString()}</p>
             </div>
                    </Link>
            
            
        </div>
        
    )
}

export default Coins
