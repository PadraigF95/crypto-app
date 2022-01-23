import React from 'react'

const Header = () => {
    return (
        <div className="sm:hidden md:hidden lg:grid lg:grid-cols-6  lg:justify-items-start w-3/4 m-auto underline mt-6 dark:bg-gray-800 dark:text-white" >
            <div className='underline'>
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
            <div>
                <span>Market Cap</span>
            </div>
        </div>
    )
}

export default Header


