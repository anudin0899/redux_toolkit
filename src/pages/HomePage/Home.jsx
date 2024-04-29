import React, { useEffect, useRef } from 'react'
import Header from '../../components/Header/Header'
import './HomePage.css'
import Card from '../../components/Card/Card'

import { useDispatch, useSelector } from 'react-redux';

import product1 from '../../Assets/product1.jpg';
import product4 from '../../Assets/product4.jpg';
import product6 from '../../Assets/product6.jpg';
import product7 from '../../Assets/product7.jpg';
import { fetchUser } from '../../redux/cart';

const data = [
    { id: 1, src: product1, name: "Volkswagen", category: "Car", price: 25000 },
    { id: 2, src: product4, name: "Nike", category: "shoe", price: 100 },
    { id: 3, src: product7, name: "Corn Icecream", category: "Icecream", price: 5 },
    { id: 4, src: product6, name: "Tomato", category: "Vegetables", price: 1 },
];


const Home = () => {

    const { userDetail } = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const counterRef = useRef(1);

    useEffect(() => {
        dispatch(fetchUser(counterRef.current));
    }, [])

    const loadMoreUsers = () => {
        dispatch(fetchUser(++counterRef.current));
    }

    // const fetchUser = async (id) => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    //     dispatch(updateUser(response.data))
    // };

    return (
        <div className='page'>
            <Header />
            <div className=' sectionDiv'>
                <div className='grid'>
                    {data.map((data, index) => {
                        return (
                            <Card pro={data} key={index} />
                        )
                    })}
                </div>
            </div>
            <div className='section'>
                <button onClick={loadMoreUsers} className='nextBtn'>Next</button>
                <pre>{JSON.stringify(userDetail, undefined, 4)}</pre>
            </div>
        </div>
    )
}

export default Home