import React from 'react'

const Header = () => {
    return (
        <div className="sm:hidden">
            <thread>
                <tr className="flex justify-center w-full">
                    <th className=" xl:ml-12">
                        Coin
                    </th>
                    <th className="">
                        Price
                    </th>
                    <th className="">
                        Volume
                    </th>
                    <th className="">
                        Daily Change
                    </th>
                    <th className="">
                        Market Cap
                    </th>
                </tr>
            </thread>
        </div>
    )
}

export default Header


