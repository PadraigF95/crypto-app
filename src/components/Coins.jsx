import React from 'react'
import { Link } from 'react-router-dom'
import StarBorderIcon from '@material-ui/icons/StarBorder'


export const Coins = ({ id,name, image, symbol, price, volume, priceChange, marketCap, rank}) => {

   

    return (
        <div className="container mx-auto mt-2 bg-white md:w-3/4 sm:mb-4">
            
            <div className="2xl:ml-96 2xl:mr-96 md:ml-20 md:mr-20 lg:ml-36 lg:mr-36 xl:ml-80 xl:mr-80 ">
                <div className=" sm:flex sm:flex-col sm:items-center justify-center  md:flex md:flex-row sm:border-b-2 sm:border-solid sm:border-4 sm:border-black ">
                    
                    <p className=" sm:pr-48 sm:relative sm:top-8 sm:text-xl md:relative md:right-6 xl:relative xl:right-64"><StarBorderIcon className="md:hidden"/>{rank}</p>
                    

                    <img src={image} alt={name} className="w-10 h-10 xl:relative xl:right-40 object-cover"  />
                    <Link to={`/coins/${id}`} key={name} style={{ textDecoration: 'none'}}>

                    <h1 className="md:w-20 md:pl-6 text-blue-600 underline sm:pb-2 xl:relative xl:right-24 xl:w-40">{name}</h1>
                    </Link>
                    <p className="md:w-20 md:pl-6  hidden ">{symbol}</p>
                   <span className="md:hidden"> Price per coin: </span> <span className="md:w-20 md:pl-12  sm:pb-2 xl:relative xl:right-24">€{price.toLocaleString()}</span>
                    <span className="md:hidden"> Current Volume:</span><p className="md:w-40 md:pl-12 sm:pb-2 xl:relative xl:right-12">€{volume.toLocaleString()}</p>
                   <span className="md:hidden"> Price Change: </span>{priceChange < 0 ? (
                        <p className="text-red-500 md:w-20 md:pl-12 sm:pb-2  xl:relative xl:right-8">{priceChange.toFixed(2)}%</p>
                    ): (
                        <p className="text-green-500 md:w-20 md:pl-12  sm:pb-2 xl:relative xl:right-8">{priceChange.toFixed(2)}%</p>
                    )
                    }
                   <span className="md:hidden"> Market Cap: </span><p className="md:w-40 md:pl-12 xl:relative xl:left-4 sm:pb-4">
                        €{marketCap.toLocaleString()}
                    </p>
                </div>
               
            </div>
            
            
            
        </div>
        
    )
}

export default Coins
