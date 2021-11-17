import React from 'react'

const Header = () => {
    return (
        <div className="hidden lg:flex flex-row justify-center pt-6 mx-auto w-1/2" >
            
                <p className="w-20">Coin</p>
                <p className="w-20">Price</p>
                <p className="w-20">Volume</p>
                <p className="w-20">Daily Change</p>
                <p className="w-20">Market Cap</p>
            
        </div>
    )
}

export default Header
