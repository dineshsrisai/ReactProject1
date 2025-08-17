import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <img className="res-img" alt="res-logo" src="https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg"/>
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
            {/* //Header
            //Body
            //Footer */}
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>);