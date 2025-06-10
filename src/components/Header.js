import { useState } from "react";

const loggedInUser=()=>{
    //Suppose we make api call to authenticate the user
    return false;
}

export const Title =() => (
<a href="/"><img className="title-logo" src="https://a.mktgcdn.com/p/HVoJy7Sqyw_sopyJMvKklguS-vlAj9LiXbF3glb7xeY/400x400.jpg" alt="App logo" />
</a>
 );


 //Component
//Functional component
const Header = ()=> {
    const [isLoggedIn , setIsLoggedIn]= useState(true);
    return (<div className="header">
    <Title/>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
    {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)} className="btn">Login</button>:
    <button className="btn" onClick={()=>setIsLoggedIn(true)}>Logout</button>
    }
     </div>
    );

    };


 export default Header;