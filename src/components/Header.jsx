import React from 'react'

const Header = () => {
    return (
        <div className="sm:hidden md:flex md:flex-row md:justify-center mt-6" >
            <div className='md:relative xl:right-44 lg:right-5 md:right-16  underline'>
                <span>Coin</span>
            </div>
            <div className='md:relative xl:right-11 lg:right-0 underline'>
                <span>Price per Coin</span>
            </div>
               
            <div className='md:relative xl:left-8 lg:left-14 md:left-4 underline'>
                <span>Volume</span>
            </div>
            <div className='md:relative xl:left-28 lg:left-28 md:left-14 underline'>
                <span>Price Change</span>
            </div>
            <div className='md:relative xl:left-44 lg:left-36 md:left-24  underline'>
                <span>Market Cap</span>
            </div>
        </div>
    )
}

export default Header


