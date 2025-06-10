import { useState , useEffect } from "react";
import { restrauntList } from "../config.js";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer.js";

//filterData method
function filterData(searchInput,restraunts){
  return restraunts.filter((restraunts)=>restraunts?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
}

const Body = ()=>{
    const [allRestraunts , setAllRestraunts]=useState([]);
    const [filteredrestraunts,setFilteredRestraunts]= useState([]);
    const [searchInput , setSearchInput] = useState("");

    useEffect(()=>{
      getRestraunts();
    },[])

    //function call to make call to api
    async function getRestraunts() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
      const json = await data.json();
      setAllRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(!allRestraunts) return null; //early return

    return (allRestraunts?.length == 0 )?<Shimmer/>:(
     <> <div className="search-container">
    <input type="text" className="search-input" placeholder="Search" value={searchInput}
    onChange={(e)=>{
        setSearchInput(e.target.value);
    }}
    />
    <button className="search-btn" onClick={()=>{
      const data = filterData(searchInput,allRestraunts);
      setFilteredRestraunts(data);
    }}>Search</button>
      </div>
     <div className="restraunt-list">
      {    
        filteredrestraunts.map((restraunt)=>{
            return <RestrauntCard {...restraunt.info} key={restraunt.info.id} />
        })
      }
     </div>
    </>
    ); 
}     

export default Body;