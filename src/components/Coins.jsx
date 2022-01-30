import React from 'react'
import { Link } from 'react-router-dom'




export const Coins = ({ id,name, image, price, volume, priceChange, marketCap}) => {

   

    return (
        <div key={id} className={`container mx-auto mt-2 bg-white md:w-3/4 sm:mb-4 border-b-2 border-black  dark:bg-gray-800 dark:text-white dark:border-white`}>
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
                    <span className="lg:hidden"> Market Cap: </span><p>€{marketCap.toLocaleString()}</p>
             </div>
                    </Link>
            
            
        </div>
        
    )
}

export default Coins


