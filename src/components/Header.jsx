import React from 'react'

const Header = () => {
    return (
        <div className="sm:hidden">
            <div className="flex space-x-12 justify-center pl-40 pt-8 -mb-8 pb-12">
                <div className="inline-block relative right-6 md:relative md:right-14 lg:relative lg:right-14 xl:relative xl:right-14 2xl:relative 2xl:right-14">
                    <span className="">Coin</span>
                </div>

                <div className="inline-block relative right-6 md:relative md:right-8 lg:relative lg:right-8 xl:relative xl:right-8 2xl:relative 2xl:right-8">
                    <span className="">Price</span>
                </div>

                <div className="inline-block relative left-2 md:relative md:-left-6 lg:relative lg:right-6 xl:relative xl:-left-6 2xl:right-2">
                    <span>Volume</span>
                </div>

                <div className="inline-block relative left-2 md:relative md:-left-2 lg:relative lg:-left-4 xl:relative xl:-left-2 2xl:right-4">
                    <span>Daily Change</span>
                </div>

                <div className="inline-block relative right-1 md:relative md:right-8 lg:relative lg:left-o xl:relative xl:right-6 2xl:right-6">
                    <span>Market Cap</span>
                </div>
            </div>
            
        </div>
    )
}

export default Header


