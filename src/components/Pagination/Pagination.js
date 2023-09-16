import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  // console.log(info.pages);
  // console.log(pageNumber);
  return <ReactPaginate
    // containerClassName="container"
    className="pagination justify-content-center gap-4 my-4"
    forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    breakLabel=". . ."
    nextLabel="Next"
    previousLabel="Prev"
    nextClassName={`${styles.btn} btn border border-primary border-1`}
    previousClassName={`${styles.btn} btn border border-primary border-1`}
    pageClassName="page-item"
    pageLinkClassName="page-link"
    activeClassName="active"
    onPageChange={(data) => {
      setPageNumber(data.selected + 1);
    }}
    pageCount={info?.pages}
  />;
};

//   return <div className='container d-flex justify-content-center gap-5 my-5'>
//     <button onClick={prev} className="btn btn-primary">Prev</button>
//     <button onClick={next} className="btn btn-primary">Next</button>
//   </div>;
// };

export default Pagination;
