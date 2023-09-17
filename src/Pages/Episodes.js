import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Episodes = () => {

    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let { air_date, name } = info;
    // console.log(info);

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {

        (async function () {

            let data = await fetch(api).then(res => res.json());
            setInfo(data);

            let c = await Promise.all(
                data.characters.map((l) => {
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
                    Episode {" "}{id}: {" "}
                    <span className="text-primary">
                        {name === '' ? "Unknown" : name}
                    </span>
                </h1>
                <h5 className="text-center">
                    Air Date {air_date === '' ? "Unknown" : air_date}
                </h5>
            </div>

            <div className="row">
                <div className="col-3">
                    <h4 className="text-center mb-4">
                        Select Episode:
                    </h4>
                    <InputGroup setID={setID} name="Episode" total={51} />

                </div>
                <div className="col-8">
                    <div className="row">
                        <Cards
                            page="/episodes/"
                            results={results}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Episodes;
