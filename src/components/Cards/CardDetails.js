import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = () => {

    let { id, } = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {
        name,
        location,
        image,
        origin,
        gender,
        species,
        status,
        type } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {

        (async function () {

            let data = await fetch(api).then(res => res.json());
            updateFetchedData(data);
        })();
    }, [api]);

    return (
        <div className='container d-flex justify-content-center'>
            <div className="d-flex flex-column gap-4">
                <h1 className="text-center">
                    {name}
                </h1>
                <img src={image} alt="" className="img-fluid border border-primary border-2 rounded-4" />

                {(() => {
                    if (status === "Dead") {
                        return (
                            <div className="badge bg-danger fs-5">
                                {status}
                            </div>
                        );
                    } else if (status === "Alive") {
                        return (
                            <div className="badge bg-success fs-5">
                                {status}
                            </div>
                        );
                    } else {
                        return (
                            <div className="badge bg-secondary fs-5">
                                {status}
                            </div>
                        );
                    }
                })()}

                <div className="content fs-3">
                    <div className="">
                        <span className="fw-bold">Gender:</span> {gender}
                    </div>
                    <div className="">
                        <span className="fw-bold">Species:</span> {species}
                    </div>
                    <div className="">
                        <span className="fw-bold">Type:</span> {type === "" ? 'Unknown' : type}
                    </div>
                    <div className="">
                        <span className="fw-bold">Last Location:</span> {location?.name}
                    </div>
                    <div className="">
                        <span className="fw-bold">Origin from:</span> {origin?.name}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardDetails;
