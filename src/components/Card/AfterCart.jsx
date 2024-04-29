import React from 'react'
import style from './index.module.css'
import { useDispatch } from 'react-redux';
import { Decrement, Increment } from '../../redux/cart';

const AfterCart = ({ count,proId }) => {

  const dispatch = useDispatch();

  return (
    <div className={style.afterCart}>
      <button className={style.counterBtn} onClick={() => dispatch(Decrement(proId))}>-</button>
      <div className={style.count}>{count}</div>
      <button className={style.counterBtn} onClick={() => dispatch(Increment(proId))}>+</button>
    </div>
  )
}

export default AfterCart