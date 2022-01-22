import React from 'react'

const Header = () => {
    return (
        <div className="sm:hidden md:grid md:grid-cols-6  md:justify-items-start w-3/4 m-auto  " >
            <div>
                <span>Symbol</span>
            </div>
            <div>
                <span>Coin</span>
            </div>
            <div>
                <span>Price</span>
            </div>
               
            <div>
                <span>Volume</span>
            </div>
            <div>
                <span>Price Change</span>
            </div>
            <div className=''>
                <span>Market Cap</span>
            </div>
        </div>
    )
}

export default Header


