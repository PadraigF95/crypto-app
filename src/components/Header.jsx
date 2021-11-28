import React from 'react'

const Header = () => {
    return (
        <div className="sm:hidden">
            <div className="flex space-x-12 justify-center pl-40 pt-8 -mb-8">
                <div className="inline-block relative right-6 ">
                    <span className="">Coin</span>
                </div>

                <div className="inline-block relative right-6">
                    <span className="">Price</span>
                </div>

                <div className="inline-block relative left-2">
                    <span>Volume</span>
                </div>

                <div className="inline-block relative left-2">
                    <span>Daily Change</span>
                </div>

                <div className="inline-block relative right-1">
                    <span>Market Cap</span>
                </div>
            </div>
            
        </div>
    )
}

export default Header


