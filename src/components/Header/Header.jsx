import React, { useState } from 'react'
import Style from "./index.module.css"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

import { useSelector, useDispatch } from 'react-redux';


const Header = () => {
    const { cartList = [] } = useSelector((state) => state.cart);

    const [Mobile, setMobile] = useState(false);

    const totalCartCount = cartList.reduce((acc, value) => (acc + value.count), 0)
    return (
        <div className={Style.Header}>
            <div className={Style.container}>
                <div className={Style.wrapper}>

                    <button className={Style.toggles} onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <span><FaTimes /></span> : <span><FaBars /></span>}
                    </button>

                    <div className={Style.logo}>
                        <h1 className='logo'>Redux-Toolkit</h1>
                    </div>

                    <ul className={Mobile ? Style.navMenu_list : Style.flexSB} >
                        {Mobile && (<div className={Style.logo}>
                            <h1 className='logo'>Redux-Toolkit</h1>
                        </div>)}
                        <li><Link to='/'>Home</Link></li>
                    </ul>

                    <div className={Style.account}>
                        <div className={Style.accountItems}>
                            <Link to='/wishlist'>
                                <i>
                                    <div className={Style.count}>{totalCartCount}</div>
                                    <FaShoppingCart />
                                </i>
                            </Link>

                            <i> <AiOutlineUser /> </i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header