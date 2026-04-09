import React, { useEffect, useState } from 'react'
import PhotoNavbar from './PhotoNavbar'
import axios from 'axios'

const ViewAllPhotos = () => {

    const [viewallphotoData, setviewallphotoData] = new useState([])

    const fetchData = () => {
       axios.get("https://jsonplaceholder.typicode.com/photos").then(
        (response) => {
            setviewallphotoData(response.data)
        }
       ).catch()  
    }
    useEffect(() => {fetchData()} , [])
    return (
        <div>
            <PhotoNavbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {viewallphotoData.map(
                                (value, index) => {
                                    return (
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card">
                                                <img src={value.thumbnailUrl} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <p class="card-text">{value.url}</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllPhotos