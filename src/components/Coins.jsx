import React from 'react'
import { Link } from 'react-router-dom'


export const Coins = ({ id,name, image, symbol, price, volume, priceChange, marketCap, rank}) => {

    return (
        <div className="container mx-auto pt-12">
            <div >
                <div className=" sm:flex sm:flex-col sm:items-center justify-center    md:flex md:flex-row  align-middle">
                    <p className="w-20">{rank}</p>

                    <img src={image} alt="crypto" className="w-20 h-20"  />
                    <Link to={`/coins/${id}`} key={name} style={{ textDecoration: 'none'}}>

                    <h1 className="w-20 pl-6  ">{name}</h1>
                    </Link>
                    <p className="w-20 pl-6 hidden ">{symbol}</p>
                    <p className="w-20 pl-6 ">€{price.toLocaleString()}</p>
                    <p className="w-40 pl-6 sm:pl-16">€{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="text-red-500 w-20 pl-6  ">{priceChange.toFixed(2)}%</p>
                    ): (
                        <p className="text-green-500 w-20 pl-6 ">{priceChange.toFixed(2)}%</p>
                    )
                    }
                    <p className="w-40 pl-6 sm:pl-16">
                        €{marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Coins
