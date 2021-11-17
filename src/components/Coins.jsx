import React from 'react'


export const Coins = ({ id,name, image, symbol, price, volume, priceChange, marketCap, rank}) => {

    return (
        <div className="container mx-auto pt-12">
            <div >
                <div className="lg:flex lg:flex-row lg:justify-center lg:align-middle">
                    <p className="w-20">{rank}</p>

                    <img src={image} alt="crypto" className="w-20 h-20"  />
                    <h1 className="w-20 pl-6">{name}</h1>
                    <p className="w-20 pl-6">{symbol}</p>
                    <p className="w-20 pl-6">€{price.toLocaleString()}</p>
                    <p className="w-40 pl-6">€{volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="text-red-500 w-20 pl-6">{priceChange.toFixed(2)}%</p>
                    ): (
                        <p className="text-green-500 w-20 pl-6">{priceChange.toFixed(2)}%</p>
                    )
                    }
                    <p className="w-40 pl-6">
                        €{marketCap.toLocaleString()}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Coins
