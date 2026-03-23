import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
    const [search, setsearch] = useState('');
    const [foodCat, setfoodCat] = useState([]);
    const [foodItem, setfoodItem] = useState([]);

    const loadData = async () => {
        try {
            let response = await fetch("https://gofood-fulstack-mern-app.onrender.com/api/data", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            response = await response.json();
            // console.log(response.food_items, response.foodCategory);
            setfoodItem(response.food_items);
            setfoodCat(response.foodCategory);
        } catch (error) {
            console.error("Failed to load data:", error);
        }
    }

    useEffect(() => {
        loadData();
    }, []
    );

    return (
        <div>

            <div> <Navbar /></div>
            <div> <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}  >
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-centre " >
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=> {setsearch(e.target.value)}} />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </div>

                    </div>

                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/617781022/photo/baskets-of-onion-rings-curly-fries-and-cheese-sticks.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_eTPGLThcifq-ltM0T-Nv-BkaniaA_9ZE4ONqZauqA=" className="d-block w-100" alt="..." />
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
            </div>
            <div className='container' >
                {
                    Array.isArray(foodCat) && foodCat.length > 0
                        ? foodCat.map((data, idx) =>
                        (<div className='row mb-3'>
                            <div key={data._id} className='fs-3 m-3'>
                                {data.CategoryName}
                            </div>
                            {
                                Array.isArray(foodItem) && foodItem.length > 0
                                    // foodItem !== []
                                    ?
                                    foodItem.filter((item) => (item.CategoryName === data.CategoryName) &&  (item.name.toLowerCase().includes(search.toLocaleLowerCase()) )   )
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-4'>
                                                    <Card 
                                                       foodname={filterItems.name}
                                                       foodItem ={filterItems}
                                                        options={filterItems.options[0]}
                                                        img={filterItems.img}
                                                        
                                                   > </Card>
                                                </div>

                                            )
                                        }) : <div> No such data found </div>}

                            <hr />
                        </div>
                        )) : ""
                }
            </div>

            <div> <Footer /> </div>

        </div>
    )
}
