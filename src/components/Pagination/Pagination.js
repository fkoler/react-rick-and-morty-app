import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

  let [width, setWidth] = useState(window.innerWidth);
  // console.log(width);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pageNumber]);

  // console.log(info.pages);
  // console.log(pageNumber);
  return (
    <>
      <style jsx='true'>

        {`
          .btn {
            box-shadow: 2px 3px 9px rgba($color: #000000, $alpha: 0.35);
          }
          @media (max-width: 768px) {
            .next, .prev {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>

      <ReactPaginate
        containerClassName="container"
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        breakLabel=". . ."
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName={`${styles.btn} next btn border border-primary border-1`}
        previousClassName={`${styles.btn} prev btn border border-primary border-1`}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 1 && width > 576 ? 2 : 2}
        pageRangeDisplayed={width < 576 ? 2 : 1 && width > 576 ? 2 : 1}
        activeClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      // pageCount={42}
      />
    </>
  );
};

//   return <div className='container d-flex justify-content-center gap-5 my-5'>
//     <button onClick={prev} className="btn btn-primary">Prev</button>
//     <button onClick={next} className="btn btn-primary">Next</button>
//   </div>;
// };

export default Pagination;
