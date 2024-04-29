import React, { useMemo, useState } from 'react'
import style from './index.module.css'
import AfterCart from './AfterCart'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart';

const Card = ({ pro }) => {


    const { cartList } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const cartCount = useMemo(()=>{
        return cartList.find((item)=> item?.id === pro?.id)?.count;
    },[cartList])
  


    return (
        <div className={style.card_box}>
            <div className={style.prod_image}>
                <img src={pro.src} alt="product_image" />
            </div>
            <div className={style.card_btn}>
                <button onClick={() => dispatch(addToCart(pro))}>Add To Cart</button>
            </div>
            <div className={style.prod_detail}>
                <p>{pro.category}</p>
                <h3>{pro.name}</h3>
                <h2>$35</h2>
                {cartCount > 0 &&
                    <AfterCart count={cartCount} proId={pro?.id} />
                }
            </div>
        </div>
    )
}

export default Card