import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'


export const Coins = ({ id,name, image, symbol, price, volume, priceChange, marketCap, rank}) => {

   

    return (
        <div className="container mx-auto pt-12">
            
            <div >
                <div className=" sm:flex sm:flex-col sm:items-center justify-center    md:flex md:flex-row  align-middle sm: text-center">
                    <p className="md:w-20 sm:pr-48">{rank}</p>

                    <img src={image} alt={name} className="w-30 h-10"  />
                    <Link to={`/coins/${id}`} key={name} style={{ textDecoration: 'none'}}>

                    <h1 className="md:w-20 md:pl-6 text-blue-600 underline sm:pb-2">{name}</h1>
                    </Link>
                    <p className="md:w-20 md:pl-6  hidden ">{symbol}</p>
                   <span className="md:hidden"> Price per coin: </span> <span className="md:w-20 md:pl-6  sm:pb-2">€{price.toLocaleString()}</span>
                    <span className="md:hidden"> Current Volume:</span><p className="md:w-40 md:pl-6 sm:pb-2">€{volume.toLocaleString()}</p>
                   <span className="md:hidden"> Price Change: </span>{priceChange < 0 ? (
                        <p className="text-red-500 md:w-20 md:pl-6 sm:pb-2  ">{priceChange.toFixed(2)}%</p>
                    ): (
                        <p className="text-green-500 md:w-20 md:pl-6  sm:pb-2">{priceChange.toFixed(2)}%</p>
                    )
                    }
                   <span className="md:hidden"> Market Cap: </span><p className="md:w-40 md:pl-6">
                        €{marketCap.toLocaleString()}
                    </p>
                </div>
               
            </div>
            
            
            
        </div>
        
    )
}

export default Coins
