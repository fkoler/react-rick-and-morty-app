import React, { useState, useEffect, useContext } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import 'font-awesome/css/font-awesome.min.css';

import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navigation from './components/Navigation/Navigation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';
import CardDetails from './components/Cards/CardDetails';

import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './contexts/ThemeContext';
import { FaArrowUp } from 'react-icons/fa';

function App() {

  const [showButton, setShowButton] = useState(false);

  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={{ theme }}>

        <div className="container progress_wrapper">
          <div className="container progress_bar" id="bar"></div>
        </div>

        <GlobalStyles />
        <Router>

          <div className="App">
            <Navigation />
          </div>
          <div>
            <FaArrowUp
              className={showButton ? 'showButton' : 'hidden'}
              onClick={scrollToTop}
            />
          </div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<CardDetails />} />

            <Route path='/episodes' element={<Episodes />} />
            <Route path='/episodes/:id' element={<CardDetails />} />

            <Route path='/locations' element={<Locations />} />
            <Route path='/locations/:id' element={<CardDetails />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
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
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards
                page="/"
                results={results}
              />
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
};

export default App;
