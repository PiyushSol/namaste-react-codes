import { useEffect, useState } from "react";
import {useParams} from "react-router";
import Shimmer from "../components/Shimmer";
import { IMG_CDN_URL } from "../config";

const RestrauntMenu = ()=>{
    const params = useParams();
    const {id} = params;

    const [restraunt,setRestraunt] = useState(null);
    console.log(restraunt)

    useEffect(()=>{
        getRestrauntInfo();
    },[])

    async function getRestrauntInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId="+id);
        const json = await data.json();
        setRestraunt(json.data);
    }

    return (!restraunt)? <Shimmer/>:(
       <div className="menu"> 
            <h1>Restraunt id : {id}</h1>
            <h2>{restraunt?.cards[2]?.card?.card?.info?.name}</h2>
            <img src={IMG_CDN_URL+restraunt?.cards[2]?.card?.card?.info?.cloudinaryImageId
 }/>
            <h3>{restraunt?.cards[2]?.card?.card?.info?.area}</h3>
            <h3>{restraunt?.cards[2]?.card?.card?.info?.city}</h3>
            <h3>{restraunt?.cards[2]?.card?.card?.info?.avgRating}</h3>   
    </div>
    )
}

export default RestrauntMenu;