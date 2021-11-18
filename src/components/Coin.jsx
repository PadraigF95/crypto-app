import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Coin = () => {

    const [coin, setCoin] = useState([]);
    const {id} = useParams();
    
    const url =`https://api.coingecko.com/api/v3/coins/${id}`;

    const fetchCoin = async () => {
        try{
            
            const response = await fetch(url);
            const coin = await response.json();

            setCoin(coin)
            
        }catch(error){


        }
    }

    useEffect(() => {
        fetchCoin()
    }, []);

    const {
        name,
        image = [],
        community_data =[],
        description = [],
        market_data =[],  
        links =[],
    } = coin



    return (
        <div className="container mx-auto">
            <div>
                <h1>{name}</h1>
                <img src={image.large} alt="" />
            </div>

            <div>
                
            </div>
            
        </div>
    )
}

export default Coin
