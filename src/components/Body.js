import { useState } from "react";
import { restrauntList } from "../config.js";
import RestrauntCard from "./RestrauntCard";

//filterData method
function filterData(searchInput,restraunts){
  return restraunts.filter((restraunts)=>restraunts?.info?.name.includes(searchInput));
}

const Body = ()=>{
    // const searchTxt = "KFC";
    const [restraunts,setRestraunts]= useState(restrauntList);
    const [searchInput , setSearchInput] = useState("");

    return (
     <> <div className="search-container">
    <input type="text" className="search-input" placeholder="Search" value={searchInput}
    onChange={(e)=>{
        setSearchInput(e.target.value);
    }}
    />
    <button className="search-btn" onClick={()=>{
      const data = filterData(searchInput,restraunts);
      setRestraunts(data);
    }}>Search</button>
      </div>
     <div className="restraunt-list">
      {
        restraunts.map((restraunt)=>{
            return <RestrauntCard {...restraunt.info} key={restraunt.info.id} />
        })
      }
     </div>
    </>
    ); 
}     

export default Body;