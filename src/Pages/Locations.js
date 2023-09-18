import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Locations = () => {

    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let { name, type, dimension } = info;
    // console.log(info);

    let api = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(() => {

        (async function () {

            let data = await fetch(api).then(res => res.json());
            setInfo(data);

            let c = await Promise.all(
                data.residents.map((l) => {
                    return fetch(l)
                        .then(res => res.json());
                })
            );

            setResults(c);
        })();
    }, [api]);

    return (
        <div className='container'>

            <div className="row mb-4">
                <h1 className="text-center my-4">
                    Location {" "}{id}: {" "}
                    <span className="text-primary">
                        {name === '' ? "Unknown" : name}
                    </span>
                </h1>
                <h4 className="text-center">
                    Dimension: {(dimension === '' || dimension === 'unknown') ? "Unknown" : dimension}
                </h4>
                <h5 className="text-center">
                    Type: {type === '' ? "Unknown" : type}
                </h5>
            </div>

            <div className="row">
                <div className="col-lg-3 col-12">
                    <h4 className="text-center mb-4">
                        Select Location:
                    </h4>
                    <InputGroup setID={setID} name="Location" total={126} />

                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        <Cards
                            page="/locations/"
                            results={results}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Locations;
