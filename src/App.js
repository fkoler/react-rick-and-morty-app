import React, { useState, useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navigation from './components/Navigation/Navigation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';

function App() {
  return (

    <Router>
      <div className="App">
        <Navigation />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/locations' element={<Locations />} />
      </Routes>
    </Router>
  );
};

const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);

  let [search, setSearch] = useState('');

  let [status, setStatus] = useState('');

  let [gender, setGender] = useState('');

  let [species, setSpecies] = useState('');

  // console.log(pageNumber);
  let [fetchedData, updateFetchedData] = useState([]);

  let { info, results } = fetchedData;

  // console.log(results);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {

    (async function () {

      let data = await fetch(api).then(res => res.json());

      // console.log(data.results);
      updateFetchedData(data);
    })();
  }, [api]);


  return (
    <div className="App">

      <h1 className="text-center rocksalt my-5">
        Rick & Morty <span className="text-primary">Characters</span>
      </h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setSpecies={setSpecies}
          />
          <div className="col-8">
            <div className="row">
              <div className="row">
                <Cards
                  results={results}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
