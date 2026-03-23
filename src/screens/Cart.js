import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer';
import trash from "../trash.svg"

export default function Cart() {
    let data = useCart();
    let dispatch = useDispatchCart();

    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-90 text-center fs-2' >The Cart is Empty !! </div>
            </div>
        )
    }
    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        // console.log(data,localStorage.getItem("userEmail"),new Date())
        let response = await fetch("https://gofood-fulstack-mern-app.onrender.com/api/orderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        });
        console.log("JSON RESPONSE:::::", response.status)
        if (response.status === 200) {
            dispatch({ type: "DROP" })
        }
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    return (
        <div>
            <div className='container m-auto mt-2 table-responsive-sm table-responsive-md'  >
                <table className='table table-hover'>
                    <thead className='text-success fs-7'>
                        <tr>
                            <th scope='col'> Items</th>
                            <th scope='col'> Name</th>

                            <th scope='col'> Amount</th>
                            <th scope=''></th>
                        </tr>

                    </thead>
                    <tbody>
                        {data.map((food, index) => (
                            <tr>

                                <th scope='row'>{index + 1}</th>
                                <td>{food.name}</td>
                                <td>{food.price} </td>
                                <td><button type='button' className='button p-0 '><img src={trash} alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <div> <h1 className='fs-2'>Total Price:{totalPrice}/-</h1></div>
            </div>
            <div>
                <button className='btn bg-success mt-5' onClick={handleCheckOut}> Check Out</button>
            </div>

        </div>
    )
}
