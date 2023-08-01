import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import AllProduct from './AllProduct';

const AllProducts = () => {

  const [products, setProducts] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 7;
  const pagesVisited = pageNumber * productsPerPage;

  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  }


  useEffect(() => {
    const fetchData = async () => {
      const resultProduct = await axios.get('/api/products/all');

      const resultProductData = resultProduct.data;
      const sortResultProductData = resultProductData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      setProducts(sortResultProductData);
    }
    fetchData();
  }, []);

  return (
    <div className='ab_container'>
      <div className='ab_row'>
        <h2 className='ab_title'>All Product</h2>
      </div>
      <div className="ab_row">
        <div className="ab_col">
          <div className='ab_div'>
            {
              products.length === 0 ? (
                <h3 className='no_data'>NO Product</h3>
              ) : (
                <>
                  <div className='ab_blogs'> {
                    products.slice(pagesVisited, pagesVisited + productsPerPage).map((product) => (
                      <AllProduct key={product._id} product={product} />
                    ))
                  }
                  </div>
                  <ReactPaginate className='filter-pagination'
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    pageClassName={"pagi-item"}
                    pageLinkClassName={"pagi-link"}
                    activeClassName={"pagi-active"}
                    activeLinkClassName={"pagi-active-link"}
                    previousClassName={"pagi-item"}
                    previousLinkClassName={"pagi-link"}
                    nextClassName={"pagi-item"}
                    nextLinkClassName={"pagi-link"}
                    breakClassName={"pagi-item"}
                    breakLinkClassName={"pagi-link"}
                    disabledClassName={"disabledPagi"}
                  />
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProducts