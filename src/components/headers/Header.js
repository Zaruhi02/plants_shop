import React, { useContext, useState } from "react";
import { GlobalState } from '../../GlobalState';
import Menu from './icon/menu.svg';
import Close from './icon/close.svg';
import Cart from './icon/cart.svg';
import { Link } from 'react-router-dom';

function Header() {
    const state = useContext(GlobalState)

    const [isLogged, setIsLogged] = state.userAPI.isLogged
    const [isAdmin, setIsAdmin] = state.userAPI.isAdmin
    



    const adminRouter = () => {
        return (
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

     const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/">Logout</Link></li>
         </>
         )
    }

    return (
        <header>
            <div className="menu">
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'Admin':'PLANTS.COM'}</Link>
                </h1>
            </div>

            <ul>
                <li>
                    <Link to="/">{isAdmin ? 'Products' : 'Plants'}</Link>

                    {isAdmin && adminRouter()}
                    {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login  Register</Link></li>
                }
                


                    <Link to="/login"> Login </Link>
                    <Link to="/register"> Register </Link>
                    <li>
                        <img src={Close} alt="" width="30" className="menu" />
                    </li>

                </li>
            </ul>

                {
            isAdmin ? '' 
            :<div className="cart-icon">
                <span>0</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>

                }
        </header>
    )
}


export default Header;