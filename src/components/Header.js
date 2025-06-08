export const Title =() => (
<a href="/"><img className="title-logo" src="https://a.mktgcdn.com/p/HVoJy7Sqyw_sopyJMvKklguS-vlAj9LiXbF3glb7xeY/400x400.jpg" alt="App logo" />
</a>
 );


 //Component
//Functional component
const Header = ()=> (
    <div className="header">
    <Title/>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
     </div>
     );


 export default Header;