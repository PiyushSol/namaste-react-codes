import { IMG_CDN_URL } from "../config.js";
const RestrauntCard = ({name, cuisines,cloudinaryImageId,avgRatingString})=>{
    // console.log(props)
    //this is destructuring the object
    return (
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRatingString} Stars</h4>
        </div>
    );
} 

export default RestrauntCard;