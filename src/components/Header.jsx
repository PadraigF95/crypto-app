import React from 'react'

const Header = () => {
    return (
        <div className="hidden lg:flex flex-row justify-center pt-6 mx-auto w-1/2" >
            <div>
                <p className="lg:sticky left-1/3">Coin</p>

            </div>
            
               <div>
               <p className="lg">Price</p>
                
               </div>

               <div>
               <p className="">Volume</p>
                
               </div>

               <div>
               <p className="lg:sticky">Daily Change</p>
               
               </div>

               <div>
               <p className="lg:sticky">Market Cap</p>
               </div>
            
        </div>
    )
}

export default Header
