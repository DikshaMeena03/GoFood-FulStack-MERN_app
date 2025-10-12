import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let options = props.options;
    let priceOptions = Object.keys(options);
    let data = useCart();
    const priceref = useRef();
    const foodItem = props.foodItem;
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === foodItem._id) {
                food = item;

                break;
            }
        }
        if (food !== 0) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, img: props.img })
                
                return
            }
             await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, img: props.img })
            }
            return

        }
        let finalPrice = qty * parseInt(options[size]);
        useEffect(() => {
            setSize(priceref.current.value);
        }, [])

        return (
            <div>
                <div>
                    <div className="card mt-3 ml-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                        <img src={foodItem.img} className="card-img-top" alt="..." style={{ height: "170px", objectFit: "fill" }} />
                        <div className="card-body">
                            <h5 className="card-title">{props.foodItem.name}</h5>

                            <div className='container w-100'>
                                <select className='m-2 h-100  bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}> {i + 1} </option>
                                        )
                                    })}
                                </select>
                                <select className='-2 h-100  bg-success rounded' ref={priceref} onChange={(e) => setSize(e.target.value)} >
                                    {priceOptions.map((data) => (
                                        <option key={data} value={data}>{data}</option>
                                    ))}
                                </select>
                                <div className='d-inline h-30 fs-6 m-3'>₹{finalPrice}</div>
                            </div>
                            <hr />
                            <button className={'btn btn-success justify ms-2'} onClick={handleAddToCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>

                <br></br>
            </div>
        )
    }
